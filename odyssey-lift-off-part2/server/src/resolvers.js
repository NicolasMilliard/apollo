const resolvers = {
  Query: {
    // returns an array of Tracks that will be use to populate
    // the homepage grid of our web client
    tracksForHome: (parent, args, context, info) => {},
  },
};

module.exports = resolvers;
