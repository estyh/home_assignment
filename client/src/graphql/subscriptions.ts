/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConvoLink = /* GraphQL */ `
  subscription OnCreateConvoLink($userId: ID) {
    onCreateConvoLink(userId: $userId) {
      id
      userId
      conversationId
      user {
        userId
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        members
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($conversationId: ID) {
    onCreateMessage(conversationId: $conversationId) {
      id
      userId
      conversationId
      author {
        userId
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        members
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
