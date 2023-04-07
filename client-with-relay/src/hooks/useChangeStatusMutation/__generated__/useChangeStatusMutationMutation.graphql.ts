/**
 * @generated SignedSource<<26360fe0eb0f4231d2c76f221cb84160>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useChangeStatusMutationMutation$variables = {
  completed?: boolean | null;
  text?: string | null;
  updateToDoId: string;
};
export type useChangeStatusMutationMutation$data = {
  readonly updateToDo: {
    readonly id: string;
  };
};
export type useChangeStatusMutationMutation = {
  response: useChangeStatusMutationMutation$data;
  variables: useChangeStatusMutationMutation$variables;
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
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "updateToDoId"
},
v3 = [
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
        "name": "id",
        "variableName": "updateToDoId"
      },
      {
        "kind": "Variable",
        "name": "text",
        "variableName": "text"
      }
    ],
    "concreteType": "ToDo",
    "kind": "LinkedField",
    "name": "updateToDo",
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useChangeStatusMutationMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useChangeStatusMutationMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "653fc2e0a20dcce62137c57dd7f8cc0e",
    "id": null,
    "metadata": {},
    "name": "useChangeStatusMutationMutation",
    "operationKind": "mutation",
    "text": "mutation useChangeStatusMutationMutation(\n  $updateToDoId: ID!\n  $text: String\n  $completed: Boolean\n) {\n  updateToDo(id: $updateToDoId, text: $text, completed: $completed) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0217d45be986fc6981f920b34ef0ea76";

export default node;
