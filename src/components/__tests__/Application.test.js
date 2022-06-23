import React from "react";
import { render, cleanup } from "@testing-library/react";
import Application from "components/Application";

describe("Application", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    render(<Application />);
  });
});
