import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {describe, it, expect} from "vitest"
import BookingForm, { initializeTimes, updateTimes } from "./components/BookingForm";
import Reservations from "./pages/Reservations";


describe('Simple Test', () => {
    it("Tests if Vitest is working", () => {
        expect(true).toBeTruthy();
    })

})


describe('Reservation Page Tests', () => {
    it("renders the heading element correctly", () => {
        render(<Reservations />);
        const headingElement = screen.getByText("Reserve a Table");
        expect(headingElement).toBeInTheDocument();
    })

})


describe('Booking form tests', () => {
    it('checks that the initializeTimes returns the correct value', () => {
        render(<BookingForm />);

        const expectedValue = {
            availableTimes: [
                { id: 17.00, timeSlot: "17:00", booked: false },
                { id: 18.00, timeSlot: "18:00", booked: false },
                { id: 19.00, timeSlot: "19:00", booked: false },
                { id: 20.00, timeSlot: "20:00", booked: false },
                { id: 21.00, timeSlot: "21:00", booked: false },
                { id: 22.00, timeSlot: "22:00", booked: false }
            ]
        };

        expect(initializeTimes).toEqual(expectedValue);
    });


    it('checks that updateTimes returns the correct updated state dynamically', () => {
        // Defining the initial state
        let state = {
            availableTimes: [
                { id: 1, timeSlot: "17:00", booked: false },
                { id: 2, timeSlot: "18:00", booked: false },
                { id: 3, timeSlot: "19:00", booked: false },
                { id: 4, timeSlot: "20:00", booked: false },
                { id: 5, timeSlot: "21:00", booked: false },
                { id: 6, timeSlot: "22:00", booked: false }
            ]
        };

        // Defining a series of actions to update the state
        const actions = [
            // These actions represent the booking of each time slot
            { type: "BOOK_TIME", payload: 1 },
            { type: "BOOK_TIME", payload: 2 },
            { type: "BOOK_TIME", payload: 3 },
            { type: "BOOK_TIME", payload: 4 },
            { type: "BOOK_TIME", payload: 5 },
            { type: "BOOK_TIME", payload: 6 }
        ];

        // Iterate through each action and update the state
        actions.forEach(action => {
            // Call the updateTimes function with the current state and action
            state = updateTimes(state, action);

            // Define the expected state based on the action
            const expectedState = {
                availableTimes: state.availableTimes.map(time => ({
                    ...time,
                    booked: action.payload === time.id ? true : time.booked
                }))
            };

            // Check that the updated state matches the expected state
            expect(state).toEqual(expectedState);
        });
    });

    it('displays validation errors when form is submitted with empty fields', async () => {
        render(<BookingForm />);

        // Trigger blur event for each input field to mark them as "touched"
        fireEvent.blur(screen.getByRole('textbox', { name: /name/i }));
        fireEvent.blur(screen.getByRole('combobox', { name: /time/i }));
        fireEvent.blur(screen.getByRole('spinbutton', { name: /number of guests/i }));
        fireEvent.blur(screen.getByRole('combobox', { name: /occasion/i }));

        // Submit the form without filling in any fields
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        // Assert that validation errors are displayed for each form field
        expect(await screen.findByText('Name is required')).toBeInTheDocument();
        expect(await screen.findByText('Time is required')).toBeInTheDocument();
        expect(await screen.findByText('Guest count is required')).toBeInTheDocument();
        expect(await screen.findByText('Occasion is required')).toBeInTheDocument();
    });

});
