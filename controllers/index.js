exports.getIndex = (req, res, next) => {
    const users = [
        {name : first_name, id : 1},
        {name : '', id : 2},
    ];

    res.render('pages/index', { users });
}