/**
 * @generated SignedSource<<7652c0d615fe976faa70bff15b9362f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TodoLIstContainerQuery$variables = {};
export type TodoLIstContainerQuery$data = {
  readonly todos: ReadonlyArray<{
    readonly completed: boolean;
    readonly id: string;
    readonly text: string;
  } | null>;
};
export type TodoLIstContainerQuery = {
  response: TodoLIstContainerQuery$data;
  variables: TodoLIstContainerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ToDo",
    "kind": "LinkedField",
    "name": "todos",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
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
    "name": "TodoLIstContainerQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoLIstContainerQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "69b1f88b62348fbab8058a438c0e1ce5",
    "id": null,
    "metadata": {},
    "name": "TodoLIstContainerQuery",
    "operationKind": "query",
    "text": "query TodoLIstContainerQuery {\n  todos {\n    id\n    text\n    completed\n  }\n}\n"
  }
};
})();

(node as any).hash = "c16410b3a08097e1ddbb133db76f5dc5";

export default node;
