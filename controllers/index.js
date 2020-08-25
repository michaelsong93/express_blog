exports.getIndex = (req, res, next) => {
    const users = [
        {name : 'kim', id : 1},
        {name : '', id : 2},
    ];

    res.render('pages/index', { users });
}