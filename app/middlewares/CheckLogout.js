module.exports = function(req, res, next) {
    
    if (req.isUnauthenticated()) {
        return res.redirect('/login')
    }

    return next();

}