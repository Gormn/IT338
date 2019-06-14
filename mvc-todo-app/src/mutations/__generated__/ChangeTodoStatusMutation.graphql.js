/**
 * @flow
 * @relayHash a798cf829faeb45a46983d36109b9d90
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChangeTodoStatusInput = {|
  id: string,
  complete: boolean,
  clientMutationId?: ?string,
|};
export type ChangeTodoStatusMutationVariables = {|
  input: ChangeTodoStatusInput
|};
export type ChangeTodoStatusMutationResponse = {|
  +changeTodoStatus: ?{|
    +viewer: ?{|
      +id: string,
      +numCompletedTodos: ?number,
    |},
    +todo: ?{|
      +id: string,
      +complete: ?boolean,
    |},
  |}
|};
export type ChangeTodoStatusMutation = {|
  variables: ChangeTodoStatusMutationVariables,
  response: ChangeTodoStatusMutationResponse,
|};
*/


/*
mutation ChangeTodoStatusMutation(
  $input: ChangeTodoStatusInput!
) {
  changeTodoStatus(input: $input) {
    viewer {
      id
      numCompletedTodos
    }
    todo {
      id
      complete
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ChangeTodoStatusInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "changeTodoStatus",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ChangeTodoStatusPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "numCompletedTodos",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todo",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "complete",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ChangeTodoStatusMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ChangeTodoStatusMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ChangeTodoStatusMutation",
    "id": null,
    "text": "mutation ChangeTodoStatusMutation(\n  $input: ChangeTodoStatusInput!\n) {\n  changeTodoStatus(input: $input) {\n    viewer {\n      id\n      numCompletedTodos\n    }\n    todo {\n      id\n      complete\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '35b683355481d8f887d24e0cd467e34a';
module.exports = node;
