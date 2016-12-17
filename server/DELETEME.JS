postGroupVid: function(req, res) {
   db.Video.findOrCreate({where: {
     url: 'youtube.com/embed/' + req.body.video.id,
     title: req.body.video.title,
     image: req.body.video.image
   }})
   .then(function(video) {
     db.Group.findOne({where: {groupname: req.body.groupname}})
     .then(function(group) {
       db.GroupVideo.findOrCreate({where: {
         GroupId: group.get('id'),
         VideoId: video[0].get('id')
       }})
       .then(function() {
         res.status(201).send('successfully posted video to group');
       });
     });
   });
 },