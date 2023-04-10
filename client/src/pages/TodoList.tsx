import React, { useState } from 'react'
import { Stack, Button, Card, CardContent } from '@mui/material';
import TodoListContainer from '../container/TodoListContainer'
import TodoEditor from '../container/TodoEditor';

export default React.memo(function TodoList () {
  const [open, setOpen] = useState(false)
  return (<>
    <h1>TodoList with React & Relay & GraphQL</h1>

    <Card style={{ width: 600 }}>
      <CardContent>
        <Stack alignItems="flex-end" justifyContent="center">
          <Button onClick={() => setOpen(true)} variant="contained" size="small">Add</Button>
        </Stack>
        <TodoListContainer initialQueryRef={null} />
        <TodoEditor open={open} onCancel={() => {
          window.location.reload();
            setOpen(false)
          }}
        />
      </CardContent>
    </Card>

  </>
  )
})