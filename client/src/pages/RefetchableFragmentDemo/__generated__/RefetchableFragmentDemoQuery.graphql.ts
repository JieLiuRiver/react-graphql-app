/**
 * @generated SignedSource<<df3b1e16cf156725e9854d66ee85117b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RefetchableFragmentDemoQuery$variables = {
  todoId: string;
};
export type RefetchableFragmentDemoQuery$data = {
  readonly todo: {
    readonly author: {
      readonly " $fragmentSpreads": FragmentRefs<"RefreshAuthorDisplayFragment">;
    } | null;
    readonly completed: boolean;
    readonly id: string;
    readonly text: string;
  };
};
export type RefetchableFragmentDemoQuery = {
  response: RefetchableFragmentDemoQuery$data;
  variables: RefetchableFragmentDemoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "todoId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "todoId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "text",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RefetchableFragmentDemoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ToDo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RefreshAuthorDisplayFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RefetchableFragmentDemoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ToDo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "024c8611aa3562d76d42fa894c78c017",
    "id": null,
    "metadata": {},
    "name": "RefetchableFragmentDemoQuery",
    "operationKind": "query",
    "text": "query RefetchableFragmentDemoQuery(\n  $todoId: ID!\n) {\n  todo(id: $todoId) {\n    id\n    text\n    completed\n    author {\n      ...RefreshAuthorDisplayFragment\n      id\n    }\n  }\n}\n\nfragment RefreshAuthorDisplayFragment on User {\n  id\n  name\n}\n"
  }
};
})();

(node as any).hash = "587d2e835b0df47a88ba4951e51fe545";

export default node;
