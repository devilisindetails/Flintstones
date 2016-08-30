// module.exports = function authenticationMiddleware() {
//     return function(req, res, next) {
//         if (req.isAuthenticated()) {
//             return next()
//         }
//         res.redirect('/')
//     }
// };
// exports.destroySession = function(req, res, next) {
//     req.logOut();
//     req.session.destroy();
//     res.redirect("/signin");
// }



// function authenticationMiddleware() {
//     return function(req, res, next) {
//         if (req.isAuthenticated()) {
//             return next();
//         }
//         res.redirect('/signin');
//     }
// }


// return {

// 	requireAuthentication : function(req,res,next){

// 		var token = req.get('Auth');

// 		db.user.findByToken(token).then(function(user){

// 			req.user = user ;
// 			next();

// 		},function(){
// 			res.status(401).send();
// 		});

// 	}
// };
