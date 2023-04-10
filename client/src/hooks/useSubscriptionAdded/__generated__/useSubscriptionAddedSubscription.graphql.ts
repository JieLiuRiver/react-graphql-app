/**
 * @generated SignedSource<<30c500a669f762b4520e8c8736eaea08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type useSubscriptionAddedSubscription$variables = {};
export type useSubscriptionAddedSubscription$data = {
  readonly todoAdded: {
    readonly author: {
      readonly id: string;
      readonly name: string;
    } | null;
    readonly completed: boolean;
    readonly id: string;
    readonly text: string;
  };
};
export type useSubscriptionAddedSubscription = {
  response: useSubscriptionAddedSubscription$data;
  variables: useSubscriptionAddedSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ToDo",
    "kind": "LinkedField",
    "name": "todoAdded",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "completed",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "author",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useSubscriptionAddedSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useSubscriptionAddedSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b4ee633fc7526316c0531cdca1824ca4",
    "id": null,
    "metadata": {},
    "name": "useSubscriptionAddedSubscription",
    "operationKind": "subscription",
    "text": "subscription useSubscriptionAddedSubscription {\n  todoAdded {\n    id\n    text\n    completed\n    author {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "475c0475ff1c468c89a0a45b2069bd11";

export default node;
