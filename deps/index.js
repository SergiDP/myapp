const jsonwebtokenFactory = require("./jsonwebtoken");
const middlewareFactory = require("./middleware");

const depsFactory = config =>
{
    return  {
        middlewareCT: middlewareFactory.middlewareCT,
        login:jsonwebtokenFactory.login(config),
        checkToken:jsonwebtokenFactory.checkToken(config)
     }

}

module.exports = depsFactory;