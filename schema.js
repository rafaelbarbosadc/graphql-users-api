const graphql = require("graphql");
const users = require("./user.json");

let knowledgeType = new graphql.GraphQLObjectType({
  name: "Knowledge",
  fields: {
    language: { type: graphql.GraphQLString },
    frameworks: { type: new graphql.GraphQLList(graphql.GraphQLString) }
  }
});

let userType = new graphql.GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    full_name: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLString },
    city: { type: graphql.GraphQLString },
    tag: { type: graphql.GraphQLString },
    url: { type: graphql.GraphQLString },
    knowledge: { type: new graphql.GraphQLList(knowledgeType) }
  }
});

let schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: "Query",
    fields: {
      user: {
        type: userType,
        args: {
          id: {
            type: graphql.GraphQLInt
          },
          name: {
            type: graphql.GraphQLString
          }
        },
        resolve: function(_, args) {
          let response = users.find(function(user) {
            return user.name == args.name;
          });
          return response;
        }
      },
      users: {
        type: new graphql.GraphQLList(userType),
        resolve: function(_, args) {
          return users;
        }
      }
    }
  })
});

module.exports = schema;
