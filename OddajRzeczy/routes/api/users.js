const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator/check');
const User = require('../../models/User');


router.post('/', [
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Password should contain at least 6 characters').isLength({min: 6})
],  async (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

    const {email, password} = req.body;

    try {

        let user = await User.findOne({email});

        if(user) {
          return res.status(400).json({errors: [{msg: 'user already exists'}]})
        }

        user =  new User({
            email,
            password
          });

          const salt = await bcrypt.genSalt(10);

          user.password = await bcrypt.hash(password, salt);

          await user.save();
          

          const payload = {
            user: {
              id: user.id
            }
          }
          
             jwt.sign(
               payload,
               config.get('jwtSecret'),
             {expiresIn: 3600000},
             (err, token) => {
               if(err)  throw err;
                res.json({token});
          
              });



            } catch (err) {
                console.log(err.message);
            res.status(500).send('Server error');
            }

})


module.exports = router;