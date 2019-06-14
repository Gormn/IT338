/**
 * @flow
 * @relayHash 43545751b839219f985e47ac88eb3e57
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MarkAllTodosInput = {|
  complete: boolean,
  clientMutationId?: ?string,
|};
export type MarkAllTodosMutationVariables = {|
  input: MarkAllTodosInput,
  status: string,
|};
export type MarkAllTodosMutationResponse = {|
  +markAllTodos: ?{|
    +viewer: ?{|
      +todos: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +complete: ?boolean,
            +text: ?string,
          |}
        |}>
      |},
      +id: string,
      +numCompletedTodos: ?number,
    |},
    +changedTodos: ?$ReadOnlyArray<?{|
      +id: string,
      +complete: ?boolean,
    |}>,
  |}
|};
export type MarkAllTodosMutation = {|
  variables: MarkAllTodosMutationVariables,
  response: MarkAllTodosMutationResponse,
|};
*/


/*
mutation MarkAllTodosMutation(
  $input: MarkAllTodosInput!
  $status: String!
) {
  markAllTodos(input: $input) {
    viewer {
      todos(status: $status) {
        edges {
          node {
            id
            complete
            text
          }
        }
      }
      id
      numCompletedTodos
    }
    changedTodos {
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
    "type": "MarkAllTodosInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "status",
    "type": "String!",
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "complete",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "markAllTodos",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "MarkAllTodosPayload",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "todos",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "status",
                "variableName": "status"
              }
            ],
            "concreteType": "TodoConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "TodoEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Todo",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "text",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
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
        "name": "changedTodos",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MarkAllTodosMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MarkAllTodosMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "MarkAllTodosMutation",
    "id": null,
    "text": "mutation MarkAllTodosMutation(\n  $input: MarkAllTodosInput!\n  $status: String!\n) {\n  markAllTodos(input: $input) {\n    viewer {\n      todos(status: $status) {\n        edges {\n          node {\n            id\n            complete\n            text\n          }\n        }\n      }\n      id\n      numCompletedTodos\n    }\n    changedTodos {\n      id\n      complete\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1241060700aedbfc7e3941afcd7bc1d7';
module.exports = node;
