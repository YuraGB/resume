export const ActionCrError = () => {
    return {
        type: "Error",
        err: {
            text: "Oops,something  went wrong. We are sorry :(",
            img: "/style/photo/Error.png"
        }
    };
};