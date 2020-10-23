import React from "react";
import App from "./App";
import Enzyme, {shallow} from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";


Enzyme.configure({adapter: new EnzymeAdapter()})
test("renders without error", () => {
const  wrapper = shallow(<App/>);
const appComponent = wrapper.find("[data-test='component-app']");
console.log(appComponent.debug());
expect(appComponent.length).toBe(1);
});
test("renders button without errors", () => {

});
test("render counter display", () => {

});
test("counters starts at 0", () => {

});
test("clicking on button adds 1 to counter", () => {

});