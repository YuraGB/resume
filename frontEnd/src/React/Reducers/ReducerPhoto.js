export const ReducerPhoto = (state = [], action) => {

    if (action.type === "PHOTO"){
        return action.photo;
    }
    return state;
};