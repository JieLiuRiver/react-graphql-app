import { graphql } from 'babel-plugin-relay/macro';
import { useSubscription } from 'react-relay';
import { useSubscriptionAddedSubscription } from './__generated__/useSubscriptionAddedSubscription.graphql'

const todoAddedSubscription = graphql`
  subscription useSubscriptionAddedSubscription {
    todoAdded {
      id
      text
      completed
      author {
        id
        name
      }
    }
  }
`;


export default function useSubscriptionAdd () {
  useSubscription<useSubscriptionAddedSubscription>({
    subscription: todoAddedSubscription,
    variables: {},
    onNext: (response) => {
      console.log('response.todoAdded', response?.todoAdded)
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
}
