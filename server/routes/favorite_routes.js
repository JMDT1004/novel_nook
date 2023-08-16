const router = require("express").Router();
const { validateToken } = require("../auth");

const Favorite = require("../models/Favorite");
const User = require("../models/User");

async function isAuthenticated(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) throw new Error("Not Authorized");

    const data = await validateToken(token);

    const user = await User.findById(data.user_id);

    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({
      error: true,
      message: error.message,
    });
  }
}

router.post("/favorites", isAuthenticated, async (req, res) => {
  const favorite = await Favorite.create(req.body);

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $push: { favorites: favorite._id },
    },
    { new: true }
  ).populate("favorites");

  res.send({
    user,
  });
});

// get all favorites
router.get("/favorites", async (req, res) => {
  const favorites = await Favorite.find()
    .sort({ createdAt: -1 })
    .limit(8)
    .populate("user");

  res.send({
    favorites,
  });
});

router.delete("/favorites/:id", isAuthenticated, async (req, res) => {
  const fav = await Favorite.findOneAndDelete({
    bookId: req.params.id,
  });

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: {
        favorites: fav._id,
      },
    },
    { new: true }
  ).populate("favorites");

  res.send({ user });
});

module.exports = router;
