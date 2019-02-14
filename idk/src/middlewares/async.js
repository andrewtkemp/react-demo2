//building redux-promise from scratch
export default ({ dispatch }) => next => action => {
    if(!action.payload || !action.payload.then){
        return next(action);
    }
    console.log("Tell, my mom that i'm sorry.")
    action.payload.then((response)=>{
        console.log("Response ", response)
        const newAction = {
            ...action, payload:response
        }
        dispatch(newAction);
    })
} 