import { screen,render,fireEvent } from "@testing-library/react";
import { LikesCounter } from "./like-counter.component";


test("Likes Counter Test", ()=>{
    render(<LikesCounter />);

    const counter = screen.getByTestId("counter");
    const increment = screen.getByTestId("increment");


        expect(counter).toHaveTextContent("0");
        fireEvent.click(increment);
}) 

test("Check for Link" , () => {
    render(<LikesCounter />);

    const link = screen.getByText(/Home/i);
    expect(link).toBeInTheDocument();
})