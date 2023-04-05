/**
 * @generated SignedSource<<2e1a3991033ade8ac84f45a09ae8a952>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useDeleteMutationMutation$variables = {
  deleteToDoId: string;
};
export type useDeleteMutationMutation$data = {
  readonly deleteToDo: boolean;
};
export type useDeleteMutationMutation = {
  response: useDeleteMutationMutation$data;
  variables: useDeleteMutationMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "deleteToDoId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "deleteToDoId"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteToDo",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useDeleteMutationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useDeleteMutationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "35c5362968ac1a0f1694f71e560add47",
    "id": null,
    "metadata": {},
    "name": "useDeleteMutationMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteMutationMutation(\n  $deleteToDoId: ID!\n) {\n  deleteToDo(id: $deleteToDoId)\n}\n"
  }
};
})();

(node as any).hash = "2d9c11c82dd86dd037707c5b748f3f3e";

export default node;
