/**
 * @generated SignedSource<<4d478a3d20862903d2425e7f20c351c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type fetchQueryQuery$variables = {
  todoId: string;
};
export type fetchQueryQuery$data = {
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
export type fetchQueryQuery = {
  response: fetchQueryQuery$data;
  variables: fetchQueryQuery$variables;
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
    "name": "fetchQueryQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "fetchQueryQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "c811a1e5fa1a21d7bff7f63808d76ac1",
    "id": null,
    "metadata": {},
    "name": "fetchQueryQuery",
    "operationKind": "query",
    "text": "query fetchQueryQuery(\n  $todoId: ID!\n) {\n  todo(id: $todoId) {\n    id\n    text\n    completed\n    author {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fad548b9ea7887164cf829d479d59405";

export default node;
