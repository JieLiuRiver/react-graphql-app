import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import TodoList from "../../components/TodoList";
import { TodoListContainerQuery } from "./__generated__/TodoListContainerQuery.graphql";
import useDeleteMutation from "../../hooks/useDeleteMutation";
import useChangeStatusMutation from "../../hooks/useChangeStatusMutation";



interface TodoListContainerDisplayProps {
  query: any
  todoQueryRef: PreloadedQuery<TodoListContainerQuery, Record<string, unknown>>
}

const TodoListContainerDisplay: React.FC<TodoListContainerDisplayProps> = ({
  todoQueryRef,
  query
}) => {
  const data = usePreloadedQuery<TodoListContainerQuery>(query, todoQueryRef as any);
  const { submit: doDelete, submitting: deleting } = useDeleteMutation()
  const { submit: doChangeStatus, submitting: changing } = useChangeStatusMutation()

  if (data == null) {
    return <div>Error: Data is null or undefined</div>
  }

  if (data.todos == null) {
    return <div>Error: Todo data is null or undefined</div>
  }

  return (
    <>
      <TodoList
        dataSource={data}
        handleDeleteTodo={async (id) => {
          await doDelete(id);
          window.location.reload()
        }}
        handleChangeTodoStatus={async (info) => {
          if (!info) return
          await doChangeStatus(info.id, info.text, true);
          window.location.reload()
        }}
      />
      {deleting && <>deleting...</>}
      {changing && <>changing...</>}
    </>
  )
}

export default TodoListContainerDisplay