import Cafe from "../models/CafeModel.js";

export const createCafe = async (req, res, next) => {
  console.log(req.user);
  req.body.createdBy = req.user.userId;
  const cafe = await Cafe.create(req.body);
  res.status(201).json({ cafe });
};

export const getAllCafes = async (req, res, next) => {
  res.send("got all cafes");
};

export const updateCafe = async (req, res, next) => {
  res.send("supposedly");
};

export const deleteCafe = async (req, res, next) => {
  res.send("cafe supposedly deleted");
};

export const showStats = async (req, res, next) => {
  res.send("these are the stats");
};
