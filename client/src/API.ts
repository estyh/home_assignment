/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  userId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  userId?: string,
  conversations?: ModelConvoLinkConnection,
  messages?: ModelMessageConnection,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelConvoLinkConnection = {
  __typename: "ModelConvoLinkConnection",
  items?:  Array<ConvoLink | null > | null,
  nextToken?: string | null,
};

export type ConvoLink = {
  __typename: "ConvoLink",
  id?: string,
  userId?: string,
  conversationId?: string,
  user?: User,
  conversation?: Conversation,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type Conversation = {
  __typename: "Conversation",
  id?: string,
  messages?: ModelMessageConnection,
  associated?: ModelConvoLinkConnection,
  members?: Array< string >,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id?: string,
  userId?: string,
  conversationId?: string,
  author?: User,
  content?: string,
  conversation?: Conversation,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateUserInput = {
  userId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  userId: string,
};

export type CreateConversationInput = {
  id?: string | null,
  members: Array< string >,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelConversationConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConversationConditionInput | null > | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  not?: ModelConversationConditionInput | null,
};

export type UpdateConversationInput = {
  id: string,
  members?: Array< string > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteConversationInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  userId: string,
  conversationId: string,
  content: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMessageConditionInput = {
  userId?: ModelIDInput | null,
  conversationId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMessageInput = {
  id: string,
  userId?: string | null,
  conversationId?: string | null,
  content?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateConvoLinkInput = {
  id?: string | null,
  userId: string,
  conversationId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelConvoLinkConditionInput = {
  userId?: ModelIDInput | null,
  conversationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConvoLinkConditionInput | null > | null,
  or?: Array< ModelConvoLinkConditionInput | null > | null,
  not?: ModelConvoLinkConditionInput | null,
};

export type UpdateConvoLinkInput = {
  id: string,
  userId?: string | null,
  conversationId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserFilterInput = {
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelConversationFilterInput = {
  id?: ModelIDInput | null,
  members?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConversationFilterInput | null > | null,
  or?: Array< ModelConversationFilterInput | null > | null,
  not?: ModelConversationFilterInput | null,
};

export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items?:  Array<Conversation | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    userId: string,
    conversations?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        userId: string,
        conversationId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        userId: string,
        conversationId: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    userId: string,
    conversations?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        userId: string,
        conversationId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        userId: string,
        conversationId: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    userId: string,
    conversations?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        userId: string,
        conversationId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        userId: string,
        conversationId: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateConversationMutationVariables = {
  input?: CreateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        userId: string,
        conversationId: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    associated?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        userId: string,
        conversationId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    members: Array< string >,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateConversationMutationVariables = {
  input?: UpdateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        userId: string,
        conversationId: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    associated?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        userId: string,
        conversationId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    members: Array< string >,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteConversationMutationVariables = {
  input?: DeleteConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        userId: string,
        conversationId: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    associated?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        userId: string,
        conversationId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    members: Array< string >,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input?: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    userId: string,
    conversationId: string,
    author?:  {
      __typename: "User",
      userId: string,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    content: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      members: Array< string >,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input?: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    userId: string,
    conversationId: string,
    author?:  {
      __typename: "User",
      userId: string,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    content: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      members: Array< string >,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input?: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    userId: string,
    conversationId: string,
    author?:  {
      __typename: "User",
      userId: string,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    content: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      members: Array< string >,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateConvoLinkMutationVariables = {
  input?: CreateConvoLinkInput,
  condition?: ModelConvoLinkConditionInput | null,
};

export type CreateConvoLinkMutation = {
  createConvoLink?:  {
    __typename: "ConvoLink",
    id: string,
    userId: string,
    conversationId: string,
    user?:  {
      __typename: "User",
      userId: string,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      members: Array< string >,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateConvoLinkMutationVariables = {
  input?: UpdateConvoLinkInput,
  condition?: ModelConvoLinkConditionInput | null,
};

export type UpdateConvoLinkMutation = {
  updateConvoLink?:  {
    __typename: "ConvoLink",
    id: string,
    userId: string,
    conversationId: string,
    user?:  {
      __typename: "User",
      userId: string,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      members: Array< string >,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  userId?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    userId: string,
    conversations?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        userId: string,
        conversationId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        userId: string,
        conversationId: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  userId?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      userId: string,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetConversationQueryVariables = {
  id?: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        userId: string,
        conversationId: string,
        content: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    associated?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        userId: string,
        conversationId: string,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    members: Array< string >,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListConversationsQueryVariables = {
  filter?: ModelConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ModelConversationConnection",
    items?:  Array< {
      __typename: "Conversation",
      id: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      members: Array< string >,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateConvoLinkSubscriptionVariables = {
  userId?: string | null,
};

export type OnCreateConvoLinkSubscription = {
  onCreateConvoLink?:  {
    __typename: "ConvoLink",
    id: string,
    userId: string,
    conversationId: string,
    user?:  {
      __typename: "User",
      userId: string,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      members: Array< string >,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  conversationId?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    userId: string,
    conversationId: string,
    author?:  {
      __typename: "User",
      userId: string,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    content: string,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
      members: Array< string >,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
