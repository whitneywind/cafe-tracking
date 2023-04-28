import Cafe from "../models/CafeModel.js";

export const createCafe = async (req, res, next) => {
  console.log(req.user);
  req.body.createdBy = req.user.userId;
  const cafe = await Cafe.create(req.body);
  res.status(201).json({ cafe });
};

export const deleteAll = async (req, res, next) => {
  await Cafe.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("All documents deleted");
      res.send("deleted all");
    }
  });
};

export const getAllCafes = async (req, res, next) => {
  try {
    const { search, status } = req.query;
    const filter = { createdBy: req.user.userId };

    if (search) {
      filter.cafeName = { $regex: search, $options: "i" };
    }

    if (status === "visited") {
      filter.visited = true;
    } else if (status === "unvisited") {
      filter.visited = false;
    }

    const cafes = await Cafe.find(filter);

    res.status(200).json({ cafes, totalCafes: cafes.length });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "an error occurred when retrieving cafes" });
  }
};

export const updateCafe = async (req, res, next) => {
  res.send("supposedly");
};

export const deleteCafe = async (req, res) => {
  const { id: cafeId } = req.params;

  const cafe = await Cafe.findOneAndDelete({ _id: cafeId });

  if (!cafe) res.status(404).json({ msg: "no item found with this ID" });

  //   await cafe.remove();
  res.status(200).json({ msg: "successfully deleted" });

  //   await Cafe.findOneAndDelete({ _id: cafeId }, (err) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log("All documents deleted");
  //       res.send("deleted all");
  //     }
  //   });
};

export const showStats = async (req, res, next) => {
  res.send("these are the stats");
};
