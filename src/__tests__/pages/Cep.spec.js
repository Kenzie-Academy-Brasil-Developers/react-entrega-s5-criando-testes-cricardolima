import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import api from "../../services";
import MockAdapter from "axios-mock-adapter";
import { Search } from "semantic-ui-react";

const apiMock = new MockAdapter(api);

describe("Search Page", () => {
    it("should search for a Adress", async () => {
        apiMock.onGet("99999999").replyOnce(200, {})
        render(<Search />)

        const input = screen.getByPlaceholderText("Insira o CEP");
        const buttonElement = screen.getByText("Buscar pelo CEP");

        fireEvent.change(input, { target: { value: 99999999}});
        fireEvent.click(buttonElement);

        await waitFor(() => {
            expect(input).toHaveValue(999999999)
        })
    })
})