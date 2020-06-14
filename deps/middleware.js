

const middlewareCT = checkFn => (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

    checkFn(token)
     .then((decoded) => {
     req.decoded = decoded;
     next();
     })
     .catch((err) => {
     res.json(err)
     next();
     })
    //req.decoded = await checkFn(token).catch((err) =>  {return res.json(err)});

}

module.exports = {
    middlewareCT: middlewareCT
}

