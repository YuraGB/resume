export const ReducerHobbies = (state = [], action) => {

    if (action.type === "HOBBIES") {
        return action.hobbies;
    }
    return state;
};