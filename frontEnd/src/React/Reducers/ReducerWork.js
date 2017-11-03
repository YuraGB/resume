export const ReducerWork = (state = [], action) => {

    if (action.type === "WORK") {
        return action.work;
    }
    return state;
};