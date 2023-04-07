/**
 * @generated SignedSource<<94fa7959564ecbc3c043f9813cd9a8cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FragmentDemoQuery$variables = {
  todoId: string;
};
export type FragmentDemoQuery$data = {
  readonly todo: {
    readonly author: {
      readonly " $fragmentSpreads": FragmentRefs<"AuthorDisplayFragment">;
    } | null;
    readonly completed: boolean;
    readonly id: string;
    readonly text: string;
  };
};
export type FragmentDemoQuery = {
  response: FragmentDemoQuery$data;
  variables: FragmentDemoQuery$variables;
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
    "name": "FragmentDemoQuery",
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
                "name": "AuthorDisplayFragment"
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
    "name": "FragmentDemoQuery",
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
    "cacheID": "f1db7ae14ad389b63ed01ce78cc73ff3",
    "id": null,
    "metadata": {},
    "name": "FragmentDemoQuery",
    "operationKind": "query",
    "text": "query FragmentDemoQuery(\n  $todoId: ID!\n) {\n  todo(id: $todoId) {\n    id\n    text\n    completed\n    author {\n      ...AuthorDisplayFragment\n      id\n    }\n  }\n}\n\nfragment AuthorDisplayFragment on User {\n  id\n  name\n}\n"
  }
};
})();

(node as any).hash = "3e5ef1fe7b8d05b3143f16a8683c907e";

export default node;
