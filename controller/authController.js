const User = require("../model/userModel");
const db = require("../config/connection");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { TOKEN_KEY } = process.env;

exports.index = function(req, res) {
    res.send('What are you doing here!');
}

exports.register = async (req, res) => {
    try {
        // Get user input
        const { nama, email, alamat, gender, phone, password } = req.body;
    
        // Validate user input
        if (!(email && password && nama && alamat && gender && phone)) {
          res.status(400).send("All input is required");
        }
         const oldUser = await User.findOne({ email });

         if (oldUser) {
           return res.status(409).send("User Already Exist. Please Login!");
         }
    
        //Encrypt user password
        const encryptedPassword = await bcrypt.hash(password, 10);
        const token = jwt.sign(
          { user_id: User._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );

        // save user token
        User.token = token;

        // Create user in our database
        const user = await User.create({
          nama,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
          alamat,
          gender,
          phone,   
          token,
        });

        // return new user
        res.status(201).json(user);

        } catch (err) {
          console.log(err);
        }
}

exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;

    if (!email || !password) {
      res.status(400).send("Silahkan masukkan email dan password anda");
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email invalid!')

    const validPassword = await bcrypt.compare(password, user.password)
    const hashedPassword = await bcrypt.hash(password, 10)
    if (!validPassword) return res.status(400).send(validPassword)
      const token = jwt.sign(
        { user_id: User._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
    // save user token
    user.token = token;

    // user
    res.status(200).json(user);
    res.status(200).send("berhasil login");
    //   if(!user && !bcrypt.compare(password, user.password)){
    //   //return {status:'error',error:'user not found'}
    //   res.status(200).json(user.email);
    // }
    //res.status(400).send("username ");
    // if (user && (await bcrypt.compare(password, user.password))) {
    //   const token = jwt.sign(
    //     { user_id: User._id, email },
    //     process.env.TOKEN_KEY,
    //     {
    //       expiresIn: "2h",
    //     }
    //   );
    // // save user token
    // user.token = token;

    // // user
    //res.status(200).json(user);
    // res.status(200).send("berhasil login");
    // }
  } catch (err) {
    console.log(err);
  };
}

exports.forgot_password = function(req, res) {

}