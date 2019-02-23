export default `
	type Query {
		me: User
		user(id: ID!): User
		users: [User]
	}

	type Mutation {
		signup(firstName: String!, lastName: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String): AuthPayload!
	}

	type AuthPayload {
		token: String!
		user: User!
	}

	type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }
`;
