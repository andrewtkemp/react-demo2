import React from "react";
import CommentList from "components/CommentList";
import Root from "Root";
import {mount} from "enzyme";

let wrapper;
beforeEach(()=>{
    const initialState = {
        comments:["Comment 1", "Comment 2"]
    }
    wrapper = mount(<Root initialState={initialState}><CommentList/></Root>) 
})


it("create one LI per comment", ()=>{
    expect(wrapper.find("li").length).toEqual(2);
})

it("show the text for each comment", ()=>{
    expect(wrapper.render().text()).toContain("Comment 1");
    expect(wrapper.render().text()).toContain("Comment 2");
})