import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import DayListItem from "components/DayListItem";

describe("DayListItem", () => {
  afterEach(cleanup);
  const setSelectedDay = jest.fn();

  it("renders without crashing", () => {
    render(
      <DayListItem
        name="Monday"
        spots={0}
        selected
        setSelectedDay={setSelectedDay}
      />
    );
  });

  it('reders "no spots remaining" when there are 0 spots', () => {
    const { getByText } = render(
      <DayListItem
        name="Monday"
        spots={0}
        selected
        setSelectedDay={setSelectedDay}
      />
    );
    expect(getByText("no spots remaining")).toBeInTheDocument();
  });

  it('renders "1 spot remaining" when there is 1 spot', () => {
    const { getByText } = render(
      <DayListItem
        name="Monday"
        spots={1}
        selected
        setSelectedDay={setSelectedDay}
      />
    );
    expect(getByText("1 spot remaining")).toBeInTheDocument();
  });

  it('render "2 spots remaining" when there are 2 spots', () => {
    const { getByText } = render(
      <DayListItem
        name="Monday"
        spots={2}
        selected
        setSelectedDay={setSelectedDay}
      />
    );
    expect(getByText("2 spots remaining")).toBeInTheDocument();
  });

  it("render with a clickable function", () => {
    const { getByText } = render(
      <DayListItem
        name="Monday"
        spots={2}
        selected
        setSelectedDay={setSelectedDay}
      />
    );
    fireEvent.click(getByText("Monday"));
    expect(setSelectedDay).toHaveBeenCalledTimes(1);
  });
});
