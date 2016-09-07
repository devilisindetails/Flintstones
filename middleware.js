module.exports = function(db) {
    return {
        requireStudentAuthentication: function(req, res, next) {

              var token = req.cookies.token;
            db.student.findByToken(token).then(function(student) {
                req.student = student;
                next();
            }, function() {
                res.status(401).send();
            });
        },
        requireTeacherAuthentication: function(req, res, next) {
            var token = req.get('Auth');
            db.teacher.findByToken(token).then(function(teacher) {
                req.teacher = teacher;
                next();
            }, function() {
                res.status(401).send();
            });
        }
    };
};










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
