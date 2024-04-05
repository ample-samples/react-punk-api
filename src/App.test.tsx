import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ReactNode } from "react"
import App from "./App"
import BeerDisplay from "./Components/BeerDisplay/BeerDisplay"

describe('rendering components at a high level', () => {
  it("should load the beer display", () => {
    render(<App />);
    const beerDisplay = screen.getByTestId("beer-display");

    expect(beerDisplay).toBeInTheDocument()
  })

  it("should load the side panel", () => {
    render(<App />);
    const sidebar = screen.getByTestId("sidebar")

    expect(sidebar).toBeInTheDocument()
  })
})


