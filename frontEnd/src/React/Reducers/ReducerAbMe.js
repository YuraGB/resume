export const ReducerAbMe = (state = {}, action) => {

    if (action.type === "ABOUT_ME") {
        return action.AbMe;
    }
    return state;
};