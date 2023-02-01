let total = 0;
module.exports = (req, res, next) => {
  if (req.method === "POST" && req.originalUrl === "/cart") {
    total++;
    return res.status(200).jsonp({ total });
  }
  if (req.method === "GET" && req.originalUrl === "/cart") {
    return res.status(200).jsonp({ total });
  }

  next();
};
