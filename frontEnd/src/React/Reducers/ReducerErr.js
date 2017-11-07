export const ReducerError = (state = [], action) => {

    if (action.type === "Error") {
        return action.err;
    }
    return state;
};