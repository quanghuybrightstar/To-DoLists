
function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type);
        console.log("PrevState: ", prevState);
        const newState = reducer(prevState, action);

        console.groupEnd();
        console.log("NewState: ", newState);

        return newState;
    }
}

export default logger;