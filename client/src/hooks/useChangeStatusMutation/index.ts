import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useMutation, Disposable } from 'react-relay';
import { useChangeStatusMutationMutation } from './__generated__/useChangeStatusMutationMutation.graphql'

const changeTodoStatusMutation = graphql`
  mutation useChangeStatusMutationMutation($updateToDoId: ID!, $text: String, $completed: Boolean) {
    updateToDo(id: $updateToDoId, text: $text, completed: $completed) {
      id
    }
  }
`

export default function useChangeStatusMutation() {
  const [commit, inFlight] = useMutation<useChangeStatusMutationMutation>(changeTodoStatusMutation);
  const disposableRef = React.useRef<Disposable>();

  React.useEffect(() => () => disposableRef.current?.dispose(), [])

  const submit = React.useCallback((id: string, text: string, completed: boolean): Promise<string> => {
    return new Promise((resolve, reject) => {
      disposableRef.current = commit({
        variables: {
          updateToDoId: id,
          text,
          completed
        },
        onCompleted: (data) => {
          resolve(data.updateToDo.id)
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