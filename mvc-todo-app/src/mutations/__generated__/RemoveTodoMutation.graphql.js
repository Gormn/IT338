/**
 * @flow
 * @relayHash d8e47afe7d365411c05d85c793ab7a23
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveTodoInput = {|
  id: string,
  clientMutationId?: ?string,
|};
export type RemoveTodoMutationVariables = {|
  input: RemoveTodoInput
|};
export type RemoveTodoMutationResponse = {|
  +removeTodo: ?{|
    +viewer: ?{|
      +numTodos: ?number,
      +numCompletedTodos: ?number,
    |},
    +deletedId: ?string,
  |}
|};
export type RemoveTodoMutation = {|
  variables: RemoveTodoMutationVariables,
  response: RemoveTodoMutationResponse,
|};
*/


/*
mutation RemoveTodoMutation(
  $input: RemoveTodoInput!
) {
  removeTodo(input: $input) {
    viewer {
      numTodos
      numCompletedTodos
      id
    }
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "numTodos",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "numCompletedTodos",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deletedId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveTodoPayload",
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
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveTodoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveTodoPayload",
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveTodoMutation",
    "id": null,
    "text": "mutation RemoveTodoMutation(\n  $input: RemoveTodoInput!\n) {\n  removeTodo(input: $input) {\n    viewer {\n      numTodos\n      numCompletedTodos\n      id\n    }\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '066369071d5bca0c80d3fcc8ee0e035c';
module.exports = node;
