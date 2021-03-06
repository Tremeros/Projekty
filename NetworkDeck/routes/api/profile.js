const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user.id}).populate('user', ['name', 'avatar']);

    if(!profile) {
      return res.status(400).json({msg: 'There is no user for this profile'});
    }

    res.json(profile);

  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/', [auth, [
  check('status', 'Status is required').not().isEmpty(),
  check('skills', 'Skills are required').not().isEmpty()
]],
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  } = req.body;

  // Bulid profile ObjectId

  const profileFields = {};
  profileFields.user = req.user.id;
  if(company) profileFields.company = company;
  if(website) profileFields.website = website;
  if(location) profileFields.location = location;
  if(bio) profileFields.bio = bio;
  if(status) profileFields.status = status;
  if(githubusername) profileFields.githubusername = githubusername;
  if(skills) {
    profileFields.skills = skills.split(',').map(skill => skill.trim());
  }

  // Bulid social Object

  profileFields.social = {};
  if(youtube) profileFields.social.youtube = youtube;
  if(twitter) profileFields.social.twitter = twitter;
  if(facebook) profileFields.social.facebook = facebook;
  if(linkedin) profileFields.social.linkedin = linkedin;
  if(instagram) profileFields.social.instagram = instagram;

  try {
     let profile = await Profile.findOne({user: req.user.id});
     if(profile) {
       profile = await Profile.findOneAndUpdate(
         {user: req.user.id},
         {$set: profileFields},
         {new: true}
       );
       return res.json(profile);
     }

     // Creating profile
     profile = new Profile(profileFields);
     await profile.save();
     res.json(profile);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }

});

// get all Profiles

router.get('/', async (req, res) =>{
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// get profile by id

router.get('/user/:user_id', async (req, res) =>{
  try {
    const profile = await Profile.findOne({ user: req.params.user_id}).populate('user', ['name', 'avatar']);

    if(!profile) return res.status(400).json({msg: 'Profile not found'});

    res.json(profile);
  } catch(err) {
    console.error(err.message);
    if(err.kind = 'Objectid') {
      return res.status(400).json({msg: 'Profile not found'});
    }
    res.status(500).send('Server error');
  }
});

// Delete user, profile and post


router.delete('/', auth, async (req, res) =>{
  try {
    // Remove user posts 
    await Post.deleteMany({user: req.user.id});

    // Remove profile
    await Profile.findOneAndRemove({user: req.user.id});

    // Remove user
    await User.findOneAndRemove({_id: req.user.id});

    res.json({msg: 'User deleted'});
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add experience

router.put('/experience', [ auth, [
  check('title', 'Title is required').not().isEmpty(),
  check('company', 'Company is required').not().isEmpty(),
  check('from', 'From date is required').not().isEmpty()
] ],
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return status(400).json({errors: errors.array()});
  }

  const {title, company, location, from, to, current, description,  } = req.body;

  const newExp = {
    title,
    company,
    location,
    from,
    to,
    current,
    description
  }

  try {
    const profile = await Profile.findOne({user: req.user.id});
    profile.experience.unshift(newExp);

    await profile.save();

    res.json(profile);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete experience


router.delete('/experience/:exp_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user.id});

    const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);

    profile.experience.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//Education


router.put('/education', [ auth, [
  check('school', 'School is required').not().isEmpty(),
  check('degree', 'Degree is required').not().isEmpty(),
  check('fieldofstudy', 'Fieldofstudy is required').not().isEmpty(),
  check('from', 'From date is required').not().isEmpty()
] ],
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return status(400).json({errors: errors.array()});
  }

  const {school, degree, fieldofstudy, from, to, current, description,  } = req.body;

  const newEdu = {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  }

  try {
    const profile = await Profile.findOne({user: req.user.id});
    profile.education.unshift(newEdu);

    await profile.save();

    res.json(profile);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete education


router.delete('/education/:edu_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user.id});

    const removeIndex = profile.education.map(item => item.id).indexOf(req.params.edu_id);

    profile.education.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get github ProfileSchema

router.get('/github/:username', async (req, res) => {
  try {
      const option = {
        uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
        method: "GET",
        headers: {'user-agent': 'node.js'}
      };

     request(option, (error, response, body) => {
       if(error) console.error(error);

       if(response.statusCode !== 200) {
         return res.status(404).json({msg: 'No github Profile found'});
       }

       res.json(JSON.parse(body));
     });

  } catch(err) {
     console.error(err.message);
     res.status(500).send('server error')
  }
});

module.exports = router;
