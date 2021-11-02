import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../components/Search";

test("should be able to render a button", () => {
    render(<Button disable onClick={() => {}}/>)

    expect(screen.getByRole("button")).toBeInTheDocument();
})