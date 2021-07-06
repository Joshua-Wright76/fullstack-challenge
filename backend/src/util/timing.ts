import { RequestHandler } from "express";

const logResponseTimes: RequestHandler = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.path} took ${duration}ms`);
  });
  next();
};

export default logResponseTimes;
