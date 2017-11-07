
const NoDataError = require("../Error/Errors").NoDataError;
const intel = require("../logger/logger").intel;
let db = [];
try {
     db = require("./info.json");
} catch (e) {
    intel.getLogger('errors').error("Error from DB", e);
   return new NoDataError(204, "Problems with db");
}


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


        Object.keys(db.hobbies).map((hobby) => {
            request.hobbies.list.push({
                name: hobby,
                text: db.hobbies[hobby].text,
                period: db.hobbies[hobby].period,
                picture: db.hobbies[hobby].picture,
                language: (db.hobbies[hobby].language ? db.hobbies[hobby].language : ''),
                favorite: (db.hobbies[hobby].favorite ? db.hobbies[hobby].favorite : ''),
                frameworks: (db.hobbies[hobby].frameworks ? db.hobbies[hobby].frameworks : '')
            })
        });

       return request;
};

exports.dbAboutMe = () => {
    const request = {};
    request.AboutMe = db.About_me;


    return   request;
};
exports.getPhoto = () => {

        return db.photo;

};