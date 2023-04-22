const express = require("express");
const router = express.Router();
// const path = require("path");
// const routes_directory = path.resolve(__dirname);
// fs.readdirSync(routes_directory).forEach((route_file) => {
//   try {
//     if (route_file != "index.js") {
//       const modRoute = path.join(routes_directory, route_file);
//       router.use("/", require(modRoute)());
//     }
//   } catch (error) {
//     console.log(`Encountered Error initializing routes from ${route_file}`);
//     console.log(error);
//   }
// });

const authRoutes = require('./auth')
const profileRoutes = require('./profile')

router.use('/user',authRoutes);
router.use('/profile',profileRoutes);

module.exports = router;
