import React, { useState } from 'react'
import { useRelayEnvironment } from 'react-relay'
import { fetchQueryQuery$data } from './__generated__/fetchQueryQuery.graphql'

import { queryByNormalFunction } from './fetch-query'

const FetchQueryDemo = () => {
    const [todo, setTodo] = useState<fetchQueryQuery$data | undefined>()
    const environment = useRelayEnvironment()

    React.useEffect(() => {
        (async () => {
           setTodo(await queryByNormalFunction(environment))
        })()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <>
        <h1>fetchQuery</h1>
        <pre>
          <code>{todo && JSON.stringify(todo, null, 2)}</code>
        </pre>
    </>
}
 
export default FetchQueryDemo;