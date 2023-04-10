import React, { useState } from 'react'
import { Modal, ModalProps, Box, Stack, TextField, Button } from '@mui/material';
import useAddMutation from '../../hooks/useAddMutation';

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

interface TodoEditorProps extends Omit<ModalProps, 'children'> {
  onCancel: (id?: string) => void
}

export default React.memo<TodoEditorProps>(({
  open,
  onCancel
}) => {
  const [taskName, setTaskName] = useState('')
  const { submit, submitting } = useAddMutation()

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
            <Button variant="contained" disabled={submitting} onClick={async () => {
              const newTodoId = await submit(taskName)
              onCancel()
              console.log('newTodoId', newTodoId)
            }}>Submit</Button>
          </Stack>
        </Box>
      </Modal>
    </>
  )
})
