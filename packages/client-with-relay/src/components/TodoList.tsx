import React from 'react'
import { List, ListItem, ListItemText, Button } from '@mui/material'
import type { TodoListContainerQuery$data } from '../container/TodoListContainer/__generated__/TodoListContainerQuery.graphql'

type TodoListProps = {
  dataSoure: TodoListContainerQuery$data
  handleDeleteTodo?: (info: string) => Promise<void>
  handleChangeTodoStatus?: (id: TodoListContainerQuery$data['todos']['0']) => Promise<void>
}

export default React.memo<TodoListProps>(({
  dataSoure,
  handleDeleteTodo,
  handleChangeTodoStatus
}) => {
  return <List>
    {dataSoure['todos'].map((item, index) => <ListItem key={`key_${item?.id}`}>
      <ListItemText
        primary={<>
          <span>{index + 1}. {item?.text}</span> ({item?.completed ? 'completed' : 'uncompleted'})
        </>}
      />
      <Button onClick={async () => {
        await handleChangeTodoStatus?.(item);
      }} size="small">complete</Button>
      <Button onClick={async () => {
        await handleDeleteTodo?.(item?.id!);
      }} color="error" size="small">delete</Button>
    </ListItem>)}
  </List>
})