class NoDataError extends Error {
    constructor (status, massage){
        super(status, massage);
        this.name = "NoDataError";
        this.massage = massage;
        this.status = status;
        Error.captureStackTrace(this, NoDataError);
    }
};


exports.NoDataError = NoDataError;



