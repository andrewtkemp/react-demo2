import React from "react";

import CommentBox from "components/CommentBox";
import Root from "Root";
import { mount } from "enzyme";

let wrapper;
beforeEach(()=>{
    wrapper = mount(<Root><CommentBox/></Root>);
})
afterEach(()=>{
    wrapper.unmount();
})
it("has a text area and a button", ()=> {
    expect(wrapper.find("textarea").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(2);
})



describe("textarea value", () => {
    beforeEach(() => {
        wrapper.find("textarea").simulate("change", {
            target: { value: "new comment" }
        })
        wrapper.update();
    })
    it("has a text area that users can type in", () => {

        expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
    })


    it("clears the text area after submission", () => {
        wrapper.find("form").simulate("submit")
        wrapper.update();
        expect(wrapper.find("textarea").prop("value")).toEqual("");
    })
})
