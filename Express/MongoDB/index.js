import express from "express";
import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt";

const app = express();
const PORT = 3001;
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://PreetMongaClerisy:<db-password>@mern-practice.exsv0jj.mongodb.net/?appName=MERN-Practice",
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

const userSchema = mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/create-user", async (req, res, next) => {
  try {
    console.log(req.body);
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    
    if (!email || !username || !password) {
        return res.send("All fields are necessary");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await User.create({
      email: email,
      username: username,
      password: hashedPassword,
    });

    return res.send(`User created ${username} created successfully`);
  } catch (err) {
    return res.send("Something went wrong");
  }
});

app.get("/get-user", async (req, res, next) => {
  try {
    const email = req.query.email;
    const user = await User.findOne({ email: email });
    return res.json(user);
  } catch (err) {
    return res.send("User not found");
  }
});

app.get("/auth", async (req, res, next) => {
  try {
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.findOne({ username: username });
    
    console.log(username, password, user);
    
    if (!user) return res.send("User not found");
    const authenticated = await bcrypt.compare(password, user.password);

    return authenticated
      ? res.send("User authenticated successfully")
      : res.status(401).send("Unauthorised access");
  } catch (err) {
    return res.send("Something went wrong");
  }
});

app.listen(PORT, () => console.log(`Server up and running at ${PORT}`));
