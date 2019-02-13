import React from "react";


import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";


const App = (props) =>{
    return (
        <div>
           <CommentBox/>
           <CommentList comments={props.comments}/>
        </div>
    )
}

export default App;
