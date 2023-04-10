/**
 * @generated SignedSource<<e79c4fbbe2cf2cf1daa0a0d07126ad98>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type WithoutFragmentDemoQuery$variables = {
  todoId: string;
};
export type WithoutFragmentDemoQuery$data = {
  readonly todo: {
    readonly author: {
      readonly id: string;
      readonly name: string;
    } | null;
    readonly completed: boolean;
    readonly id: string;
    readonly text: string;
  };
};
export type WithoutFragmentDemoQuery = {
  response: WithoutFragmentDemoQuery$data;
  variables: WithoutFragmentDemoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "todoId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "todoId"
      }
    ],
    "concreteType": "ToDo",
    "kind": "LinkedField",
    "name": "todo",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
          (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "WithoutFragmentDemoQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "WithoutFragmentDemoQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f75d39d3a315ce72c706049e548841c4",
    "id": null,
    "metadata": {},
    "name": "WithoutFragmentDemoQuery",
    "operationKind": "query",
    "text": "query WithoutFragmentDemoQuery(\n  $todoId: ID!\n) {\n  todo(id: $todoId) {\n    id\n    text\n    completed\n    author {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2f573b26c7e070b0ab890f5d2c39ecb1";

export default node;
