const resolvers = {
  Query: {
    // returns an array of Tracks that will be use to populate
    // the homepage grid of our web client
    // parent: returned value of the resolver for this field's parent
    // args: object that contains all GraphQL arguments
    // contextValue: object shared accros all resolvers
    // info: information about the operation's execution state
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
