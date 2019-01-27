
module.exports = {
    init(app){
      const staticRoutes = require("../routes/tweet");
      app.use(staticRoutes)
    }
}