/**
 * @generated SignedSource<<6b275f1a422af609e8009be10925679d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RefreshAuthorDisplayFragment$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "RefreshAuthorDisplayFragment";
};
export type RefreshAuthorDisplayFragment$key = {
  readonly " $data"?: RefreshAuthorDisplayFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RefreshAuthorDisplayFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RefreshAuthorDisplayFragment",
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

(node as any).hash = "e1aea0ace560be1fa40b3475921f8fec";

export default node;
