
exports.viewProject = function(req, res) { 
  // controller code goes here 
  	var name = req.params.name;
  	console.log("this project name is: " + name);
    res.render('project', {
    	'projectName': name
    });
};

