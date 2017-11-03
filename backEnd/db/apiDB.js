const db = require("./info.json");


exports.getWork = () => {
        const request = {};
        request.work = {};
        request.work.list = [];
        request.work.title = "The JOBS where i worked";

        Object.keys(db.work).reverse().map( ( job ) => {
            request.work.list.push({
                name: job,
                period: ( 'From ' + db.work[job].period.from + ' To ' + db.work[job].period.to ),
                profession: db.work[job].post,
                URL: db.work[job].URL,
                picture: db.work[job].picture
            })});

    return request;
};

exports.getHobbies = () => {
    const request = {};
    request.hobbies = {};
    request.hobbies.list = [];
    request.hobbies.title = "My hobbies";

    Object.keys(db.hobbies).map( ( hobby ) => {
        request.hobbies.list.push({
            name: hobby,
            text: db.hobbies[hobby].text,
            period: db.hobbies[hobby].period,
            picture: db.hobbies[hobby].picture,
            language: (db.hobbies[hobby].language?db.hobbies[hobby].language:''),
            favorite: (db.hobbies[hobby].favorite?db.hobbies[hobby].favorite:''),
            frameworks: (db.hobbies[hobby].frameworks?db.hobbies[hobby].frameworks:'')
        })});

    return request;
};

exports.dbAboutMe = () => {
    return db.About_me;
};
exports.getPhoto = () => {
    return db.photo;
};