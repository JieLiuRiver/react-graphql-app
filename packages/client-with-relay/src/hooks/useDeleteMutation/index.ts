import React from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useMutation, Disposable } from 'react-relay';
import { useDeleteMutationMutation } from './__generated__/useDeleteMutationMutation.graphql'

const deleteTodoMutation = graphql`
  mutation useDeleteMutationMutation($deleteToDoId: ID!) {
    deleteToDo(id: $deleteToDoId)
  }
`

export default function useDeleteMutation() {
  const [commit, inFlight] = useMutation<useDeleteMutationMutation>(deleteTodoMutation);
  const disposableRef = React.useRef<Disposable>();

  React.useEffect(() => () => disposableRef.current?.dispose(), [])

  const submit = React.useCallback((id: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      disposableRef.current = commit({
        variables: {
          deleteToDoId: id
        },
        onCompleted: (data) => {
          resolve(data.deleteToDo)
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
    submiting: inFlight
  }
}