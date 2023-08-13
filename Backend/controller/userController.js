const userData = require('../model/userSchema');
const bcrypt = require('bcrypt');

// register page api
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send({ message: 'All fields are required !' });
    }

    //checking user email exit or not in db
    const userExit = await userData.findOne({ email: email });
    if (userExit) {
      return res.status(400).send({ message: 'Email already exit' })
    }
    else {
      // const newUser = await userData({name, email, password});
      // await newUser.save();
      //********or*******
      const newUser = await userData.create({
        name, email, password
      })
      return res.status(200).send({ message: 'You are  Successfully Register!' })
    }


  } catch (error) {
    res.status(400).send(`error is : ${error}`)
  }
};



// login page api
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ message: 'Email or Passwrod filed are required !' });
    }

    const userexit = await userData.findOne({ email: email });
    if (userexit) {
      const passwordMatch = await bcrypt.compare(password, userexit.password);
      if (passwordMatch) {
        const token = await userexit.generateToken();
        return res.status(200).send({ token: token })
      }
      else{
        return res.status(400).send('Invalid Email or Password !')

      }
    }
    else {
      return res.status(400).send('Invalid Email or Password !')
    }


  } catch (error) {
    return res.status(400).send(`error is : ${error}`);

  }

}
