import { render, screen } from "@testing-library/react";
import {describe, it, expect} from "vitest"
import BookingForm, { initializeTimes, updateTimes } from "./components/BookingForm";


describe('simple Test', () => {
    it("Tests if Vitest is working", () => {
        expect(true).toBeTruthy();
    })

})



describe('Booking form tests', () => {
    it("renders the heading element correctly", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
    })


    it('checks that the initializeTimes returns the correct value', () => {
        render(<BookingForm />);

        const expectedValue = {
            availableTimes: [
                {
                    id: 17.00,
                    timeSlot: "17:00",
                    booked: false
                },
                {
                    id: 18.00,
                    timeSlot: "18:00",
                    booked: false
                },
                {
                    id: 19.00,
                    timeSlot: "19:00",
                    booked: false
                },
                {
                    id: 20.00,
                    timeSlot: "20:00",
                    booked: false
                },
                {
                    id: 21.00,
                    timeSlot: "21:00",
                    booked: false
                },
                {
                    id: 22.00,
                    timeSlot: "22:00",
                    booked: false
                },
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
})