import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useMutation, Disposable } from 'react-relay';
import { useAddMutationMutation } from './__generated__/useAddMutationMutation.graphql'

const addTodoMutation = graphql`
  mutation useAddMutationMutation($text: String!, $completed: Boolean!) {
    addToDo(text: $text, completed: $completed) {
      id
    }
  }
`

export default function useAddMutation() {
  const [commit, inFlight] = useMutation<useAddMutationMutation>(addTodoMutation);
  const disposableRef = React.useRef<Disposable>();

  React.useEffect(() => () => disposableRef.current?.dispose(), [])

  const submit = React.useCallback((text: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      disposableRef.current = commit({
        variables: {
          text,
          completed: false
        },
        onCompleted: (data) => {
          resolve(data.addToDo.id)
        },
        onError: (error) => {
          console.log('error', error)
          reject(error)
        }
      })
    })
  }, [])

  return {
    submit,
    submitting: inFlight
  }
}