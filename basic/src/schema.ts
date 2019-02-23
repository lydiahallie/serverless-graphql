export default `
	type Query {
		message(id: ID!): Message
		messages: [Message]
	}

	type Mutation {
		addMessage(body: String!): Message!
	}

	type Message {
		id: ID!
		body: String!
	}
`;
