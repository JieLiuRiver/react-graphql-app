import React from 'react'
import TodoLIstContainer from '../container/TodoLIstContainer'


export default React.memo(() => {
  return (
    <>
      <TodoLIstContainer initialQueryRef={null} />
    </>
  )
})