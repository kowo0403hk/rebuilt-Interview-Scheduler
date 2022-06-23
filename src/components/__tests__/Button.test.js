import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Button from "components/Button";

describe("Button", () => {
  afterEach(cleanup);
  const handleClick = jest.fn();
  it("renders without crashing", () => {
    render(<Button onClick={handleClick} />);
  });

  it("renders its `children` prop as text", () => {
    const { getByText } = render(
      <Button onClick={handleClick}>Default</Button>
    );
    expect(getByText("Default")).toBeInTheDocument();
  });

  it("renders a default button style", () => {
    const { getByText } = render(
      <Button onClick={handleClick}>Default</Button>
    );
    expect(getByText("Default")).toHaveClass("button");
  });

  it("renders a confirm button", () => {
    const { getByText } = render(
      <Button confirm onClick={handleClick}>
        Confirm
      </Button>
    );
    expect(getByText("Confirm")).toHaveClass("button--confirm");
  });

  it("renders a danger button", () => {
    const { getByText } = render(
      <Button danger onClick={handleClick}>
        Danger
      </Button>
    );
    expect(getByText("Danger")).toHaveClass("button--danger");
  });

  it("renders a clickable button", () => {
    const { getByText } = render(
      <Button onClick={handleClick}>Clickable</Button>
    );

    const button = getByText("Clickable");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
