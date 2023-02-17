import React from "react";
import { shallow } from "enzyme";
import WeatherInfo from "./WeatherInfo";

describe("WeatherInfo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WeatherInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
