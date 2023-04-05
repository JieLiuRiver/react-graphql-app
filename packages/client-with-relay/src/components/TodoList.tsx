import React from 'react'
import { List, ListItem, ListItemText, Button } from '@mui/material'
import type { TodoListContainerQuery$data } from '../container/TodoListContainer/__generated__/TodoListContainerQuery.graphql'

type TodoListProps = {
  dataSoure: TodoListContainerQuery$data
}

export default React.memo<TodoListProps>(({
  dataSoure
}) => {
  return <List>
    {dataSoure['todos'].map((item, index) => <ListItem key={`key_${item?.id}`}>
      <ListItemText
        primary={<>
          <span>{index + 1}. {item?.text}</span> ({item?.completed ? 'completed' : 'uncompleted'})
        </>}
      />
      <Button size="small">complete</Button>
      <Button color="error" size="small">delete</Button>
    </ListItem>)}
  </List>
})