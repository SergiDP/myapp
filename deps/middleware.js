

const middlewareCT = checkFn => async (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

    /*middleware.checkToken(token)
     .then((decoded) => {
     req.decoded = decoded;
     next();
     })
     .catch((err) => {
     res.json(err)
     })*/
    req.decoded = await checkFn(token).catch((err) =>  {return res.json(err)});
    next();
}

module.exports = {
    middlewareCT: middlewareCT
}

