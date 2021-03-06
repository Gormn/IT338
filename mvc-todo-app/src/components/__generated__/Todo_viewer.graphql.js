/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Todo_viewer$ref: FragmentReference;
declare export opaque type Todo_viewer$fragmentType: Todo_viewer$ref;
export type Todo_viewer = {|
  +id: string,
  +$refType: Todo_viewer$ref,
|};
export type Todo_viewer$data = Todo_viewer;
export type Todo_viewer$key = {
  +$data?: Todo_viewer$data,
  +$fragmentRefs: Todo_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Todo_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '03642422e83eec07dd1fc88cc4ef902a';
module.exports = node;
