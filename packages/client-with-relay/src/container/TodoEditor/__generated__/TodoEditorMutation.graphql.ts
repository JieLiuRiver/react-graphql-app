/**
 * @generated SignedSource<<dc0e79cc3c8c5e8b51f1d1c61eebb033>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoEditorMutation$variables = {
  completed: boolean;
  text: string;
};
export type TodoEditorMutation$data = {
  readonly addToDo: {
    readonly id: string;
  };
};
export type TodoEditorMutation = {
  response: TodoEditorMutation$data;
  variables: TodoEditorMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "completed"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "text"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "completed",
        "variableName": "completed"
      },
      {
        "kind": "Variable",
        "name": "text",
        "variableName": "text"
      }
    ],
    "concreteType": "ToDo",
    "kind": "LinkedField",
    "name": "addToDo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoEditorMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TodoEditorMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "187802a2995d2f1b8e94daba2627479f",
    "id": null,
    "metadata": {},
    "name": "TodoEditorMutation",
    "operationKind": "mutation",
    "text": "mutation TodoEditorMutation(\n  $text: String!\n  $completed: Boolean!\n) {\n  addToDo(text: $text, completed: $completed) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "feeb274e4d06316afa14b5f53c3e184b";

export default node;
