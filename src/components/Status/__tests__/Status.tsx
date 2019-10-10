import React from "react";
import renderer from "react-test-renderer";
import { Status } from "../";

describe("Status", () => {
  test("renders correctly", () => {
    const component = (
      <Status percentage={50} />
    );

    const elem = renderer
      .create(component)
      .toJSON();

    expect(elem).toMatchSnapshot();
  });
});