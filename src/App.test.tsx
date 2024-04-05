import { render, screen } from "@testing-library/react"
import App from "./App"
import BeerDisplay from "./Components/BeerDisplay/BeerDisplay"

describe("rendering components at a high level", () => {
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

describe("beer display behaviour", () => {
  it("should show many beers on first load", () => {
    render(<BeerDisplay filter={{}} searchTerm="" />)
    const beerDisplay = screen.getByTestId("beer-display");

    expect(beerDisplay.childNodes.length > 5).toBeTruthy()
  })

  it("should show no beers if light beers and dark beers are filtered for", () => {
    render(<BeerDisplay filter={{"dark-beer": true, "light-beer": true}} searchTerm="" />)
    const beerDisplay = screen.getByTestId("beer-display");

    expect(beerDisplay.childNodes.length === 0).toBeTruthy()
  })

  it("should show no beers if the user searches for gibberish", () => {
    render(<BeerDisplay filter={{}} searchTerm="1lk2jhkj0p214h321jkp" />)
    const beerDisplay = screen.getByTestId("beer-display");

    expect(beerDisplay.childNodes.length === 0).toBeTruthy()
  })
})
