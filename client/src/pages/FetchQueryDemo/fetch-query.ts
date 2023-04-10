
import { fetchQuery } from 'react-relay'
import graphql from 'babel-plugin-relay/macro';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'
import { fetchQueryQuery, fetchQueryQuery$data } from './__generated__/fetchQueryQuery.graphql'

const query = graphql`
    query fetchQueryQuery($todoId: ID!) {
        todo(id: $todoId) {
          id
          text
          completed,
          author {
            id,
            name
          }
        }
    }
`

export const queryByNormalFunction = async (
    environment: RelayModernEnvironment
): Promise<fetchQueryQuery$data | undefined> => {
    const response = await fetchQuery<fetchQueryQuery>(environment, query, {todoId: '1'}).toPromise()
    return response
}




// https://github.com/facebook/relay/blob/main/website/docs/api-reference/relay-runtime/fetch-query.md