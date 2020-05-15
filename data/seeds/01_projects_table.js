
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: "Environmental Impact Assessment", description: "athering baseline data!" },
      { name: "Water Quality Studies", description: "Ensuring adequate water supply"},
      { name: "Air Quality Survey", description:"Reducing Carbon emissions" },
      {name: "Road Construction", description: "Improved road network and transportation"},
      {name: "Housing Project", description: "Affordable Housing for all"},
      {name: "Health Proect", description: "Dealing with Covid-19 pandemic" }
      ]);
    });
};
