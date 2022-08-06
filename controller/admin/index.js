exports.index = function(req, res) {
    res.sendFile(__basedir + '/public/views/admin/index.html')
}

exports.login = function(req, res) {
    res.sendFile(__basedir + '/public/views/admin/authentication-login.html')
}