/**
 * @generated SignedSource<<55b82634c5f398f78c77b3dfc943dec5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthorDisplayFragment$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "AuthorDisplayFragment";
};
export type AuthorDisplayFragment$key = {
  readonly " $data"?: AuthorDisplayFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuthorDisplayFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuthorDisplayFragment",
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
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "ad76123e9dc69f15eef6f581d52a96d2";

export default node;
