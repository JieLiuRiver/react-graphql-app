/**
 * @generated SignedSource<<78fa6bb4e4fed053b5ae7c05880c956f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useAddMutationMutation$variables = {
  completed: boolean;
  text: string;
};
export type useAddMutationMutation$data = {
  readonly addToDo: {
    readonly id: string;
  };
};
export type useAddMutationMutation = {
  response: useAddMutationMutation$data;
  variables: useAddMutationMutation$variables;
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
    "name": "useAddMutationMutation",
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
    "name": "useAddMutationMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "59065dbcc09bc2a92bd94abfc73553da",
    "id": null,
    "metadata": {},
    "name": "useAddMutationMutation",
    "operationKind": "mutation",
    "text": "mutation useAddMutationMutation(\n  $text: String!\n  $completed: Boolean!\n) {\n  addToDo(text: $text, completed: $completed) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d8fa62208e10943b978366f73b7f1a18";

export default node;
