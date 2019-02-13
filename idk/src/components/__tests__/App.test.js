import React from "react";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import {shallow} from "enzyme";

let wrapper;
beforeEach(()=>{
    wrapper = shallow(<App/>)
})
it("renders one CommentBox", ()=> {
    //.find() returns array
    expect(wrapper.find(CommentBox).length).toEqual(1);
})

it("renders one CommentList", ()=>{
    expect(wrapper.find(CommentList).length).toEqual(1);
})