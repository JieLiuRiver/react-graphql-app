/**
 * @generated SignedSource<<eb3e63d286746bdda69e96a10b509bf3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TodoListContainerQuery$variables = {};
export type TodoListContainerQuery$data = {
  readonly todos: ReadonlyArray<{
    readonly completed: boolean;
    readonly id: string;
    readonly text: string;
  } | null>;
};
export type TodoListContainerQuery = {
  response: TodoListContainerQuery$data;
  variables: TodoListContainerQuery$variables;
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
    "name": "TodoListContainerQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListContainerQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "de821abbab33386db0f4ce92a5b48401",
    "id": null,
    "metadata": {},
    "name": "TodoListContainerQuery",
    "operationKind": "query",
    "text": "query TodoListContainerQuery {\n  todos {\n    id\n    text\n    completed\n  }\n}\n"
  }
};
})();

(node as any).hash = "4441a2309874332b3ed976398b106f3b";

export default node;
