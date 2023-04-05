import React from 'react'
import type { TodoLIstContainerQuery$data } from '../container/__generated__/TodoLIstContainerQuery.graphql'

type TodoListProps = {
  dataSoure: TodoLIstContainerQuery$data
}

export default React.memo<TodoListProps>(({
  dataSoure
}) => {
  return <ul>
    {dataSoure['todos'].map((item, index) => <li key={`key_${item?.id}`}>
      <span>{index + 1}. {item?.text}</span> <button>delete</button>
    </li>)}
  </ul>
})