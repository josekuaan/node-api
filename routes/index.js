//get home page


exports.index = function(req,res){
   res.render('index', {Title:'Express'})
}