const router = require("express").Router();
const { createToken, validateToken } = require("../auth");
const User = require("../models/User");


// User Routes
router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = await createToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
    });
    res.send({ user });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      error: true,
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  
  try {
    const user = await User.findOne({ email: req.body.email }).populate("favorites");

    if (!user) throw new Error("User not found");

    const valid_pass = await user.validatePass(req.body.password);

    if (!valid_pass) throw new Error("Invalid password");

    const token = await createToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.send({user});
  } catch (error) {
    console.log(error);
    res.status(401).send({
      error: true,
      message: error.message,
    });
  }
});

router.get("/authenticated", async (req, res) => {
  try {
    const token = req.cookies.token;

  if (!token) return res.send({ user: null });

  const data = await validateToken(token);

  const user = await User.findById(data.user_id).populate("favorites");

  res.send({ user });
  } catch (error) {
    res.send({
      user: null
  }) 
  }
});

router.get('/logout', async (req, res) => {
  res.clearCookie('token');
  res.send('logged out successfully');
})

module.exports = router