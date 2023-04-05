import React, { useEffect, useState } from 'react'
import graphql from 'babel-plugin-relay/macro';
import { useMutation, Disposable } from 'react-relay';
import { Modal, ModalProps, Box, Stack, TextField, Button } from '@mui/material';
import { TodoEditorMutation } from './__generated__/TodoEditorMutation.graphql'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: 5
};

const addTodoMutation = graphql`
  mutation TodoEditorMutation($text: String!, $completed: Boolean!) {
    addToDo(text: $text, completed: $completed) {
      id
    }
  }
`

interface TodoEditorProps extends Omit<ModalProps, 'children'> {
  onCancel: (id?: string) => void
}

export default React.memo<TodoEditorProps>(({
  open,
  onCancel
}) => {
  const [taskName, setTaskName] = useState('')
  const [commit, inFlight] = useMutation<TodoEditorMutation>(addTodoMutation);
  const disposableRef = React.useRef<Disposable>();

  useEffect(() => () => disposableRef.current?.dispose(), [])

  const handleSubmit = () => {
    if (!taskName) {
      alert('Please enter task name')
      return
    }
    console.log('taskName', taskName)
    disposableRef.current = commit({
      variables: {
        text: taskName,
        completed: false
      },
      onCompleted: (data, errors) => {
        console.log('onCompleted', data.addToDo.id, errors);
        onCancel(data.addToDo.id)
      },
      onError: (error) => {
        console.log('error', error)
      }
    })
  }

  return (
    <>
      <Modal
        open={open}
      >
        <Box sx={style}>
          <TextField onChange={(event) => setTaskName(event.target.value)} style={{ width: '100%' }} id="standard-basic" label="Enter todo task" variant="standard" />
          <div style={{ height: 20 }} />
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <Button onClick={() => onCancel()} variant="outlined">Cancel</Button>
            <div style={{ width: 10 }} />
            <Button variant="contained" disabled={inFlight} onClick={() => handleSubmit()}>Submit</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  )
})
