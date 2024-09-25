import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'
import { verifyGoogleToken } from '../config/firebase.js';


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// login user

const loginUser = async (req, res) => {

    const { email, password } = req.body;
    try {
        // checking email allready registered

        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success:false, message:"User Doesn't exist"})
        }

        // comparing the passord

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.json({success:false, message:"Invalid password"})
        }
        
        const token = createToken(user._id);
        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// register user

const registerUser = async (req, res) => {
    
    const { name, password, email} = req.body;
    try {

        // checking is user allready exists

        const exists = await userModel.findOne({email});
        if(exists) {
            return res.json({success:false, message:"User already exists"})
        }

        //validating email format & strong password

        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter a valid email"})
        }

        // checking password is strong or not

        if(password.length < 8 ) {
            return res.json({success:false, message:"Please enter a strong password"})
        }

        // hashing user password

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// Google login/signup handler

const googleAuth = async (req, res) => {
    const { idToken } = req.body; // Get the token from the frontend
  
    try {
      // Verify Google token
      const googleUser = await verifyGoogleToken(idToken);
      console.log('Google User:', googleUser); // Log the Google user info
  
      const { email, name, picture, sub: googleId } = googleUser; // Extract user details
  
      // Check if the user already exists in MongoDB
      let user = await userModel.findOne({ email });
  
      if (!user) {
        // If the user does not exist, create a new one
        user = new userModel({
          name,
          email,
          password: '', // Password will be empty since it's a Google sign-in
        });
        await user.save();
        console.log('New user created:', user);
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      console.log('Generated Token:', token); // Log the generated token
  
      res.json({ success: true, token, user: { name: user.name, email: user.email } });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Authentication failed' });
    }
  };


export { loginUser, registerUser, googleAuth }

