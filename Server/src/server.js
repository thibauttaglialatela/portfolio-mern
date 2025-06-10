const app = require("./app.js");

// Support Passenger
if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
}

// Démarrage du serveur
if (typeof PhusionPassenger !== 'undefined') {
  app.listen('passenger');
} else {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}
