
/*
async function createExperience(req, res) {
    console.log('this is suposed to be the loggedin user--->', res)
    /* The point of this function is to create an experience. What is in an experience?
        An experience is associated with a logged in user. The logged in user has a profile
        Update function should update the experience with an activity and job which will be associated
        with the logged in user  
      
      try {
         if (!req.body.profile) return res.status(400).send('No Input');
          // creating the activity object associate with the user experience
          console.log('Request Body inside create -->', req.body, res.body); 
          /* This next line will find the first instance of a user in the database. It doesnot mean this is
          the current logged in user */             
          // const user = await User.findOne({user: req.body.user});
          // console.log('Request User -->', user);
    
          /* ReQ.user */
          /*req._id and req.user are undefined. Stop trying them */
          // console.log('user ----->', req._id, req.user);

          /*  Creating New Experience 
          let experienceObj = req.body;

          // var experience = new Experience();
          // console.log('New Experience -->', experience);
          // console.log('New User Experience -->', user.experience);

          /* Creating New Activity 
          var activity = new Activity();
          activity = await Activity.create(activity);
          experienceObj.activity = activity;
          // activity.user = req.user.id;
          // console.log('User Activity ---->', experience.activity._id);

          /* creating the job object associate with the user experience 
          var job = new Job();
          job = await Job.create(job);
          experienceObj.jobtitle = job;

          /* What is going on with experienceObj?I think this can be cleaner 
          // let activitiesArray = [];
          // activitiesArray.push(activity);
          // experienceObj.activity = activitiesArray;
          console.log('ExperienceObj ------>', experienceObj);

          // let experienceObj = req.body; ---> Already defined on line 41
          let newExperience = await Experience.create(experienceObj);
          // activity = await Activity.create(activity);
          console.log('Line before res.json ----->',experienceObj);
          // Use the experience action to return the list experience(req, res);
          res.json({ newExperience, "Success": true});
      } catch (err) {
        console.log("Error: " + err);
        res.json({ err });
  }
 */