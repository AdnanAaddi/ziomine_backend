import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateToken.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log("Body received:", req.body);

  const { user_name, password } = req.body;

  if (!user_name || !password) {
    return res.status(400).json({ error: "user_name and password are required" });
  }
  const hashedPassword = await bcrypt.hash(password,10);
  const user = await User.create({ 
    user_name, 
    password : hashedPassword});

  if (!user) {
    throw new Error("User not created");
  }

  return res.status(201).json({
    message: "User Created",
    user: {
      _id: user._id,
      user_name: user.user_name,
    },
  });
});


const loginUser = asyncHandler(async (req, res) => {
  const { user_name, password } = req.body;

  if (!user_name || !password) {
    return res.status(400).json({ error: "user_name and password are required" });
  }

  const user = await User.findOne({ user_name });

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = generateToken(user._id);

  return res.status(200).json({
    message: "Login successful",
    token,
    user: {
      _id: user._id,
      user_name: user.user_name,
    },
  });
});

const dashboardUser = asyncHandler( async (rq, res) =>{
  res.send("This is dashboad page")
})

export {loginUser};
export { registerUser };
export {dashboardUser}




// import { asyncHandler  } from "../utils/asyncHandler.js";
// import { User } from "../models/user.model.js";
// const registerUser = asyncHandler(async (req,res)=>{
//     console.log('Body received:', req.body);
//     const {user_name, password}=req.body;
//     const user= await User.create({
//         user_name,
//         password,
//     })
//     const createdUser= await User.findById(user._id)
//     if(!createdUser){
//         throw console.error("User not created");
//     }
//     return res.status(201).json({
//         message: "User Created"
//     })
// })
// export {registerUser}