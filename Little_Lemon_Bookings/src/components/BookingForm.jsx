import {
    Heading,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Button,
    Select,
} from "@chakra-ui/react";

import { useState } from "react";
import { useReducer } from "react";



// BOOKING SLOT SETUP WITH REDUCER
export const initializeTimes = {
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


export const updateTimes = (state, action) => {
    switch (action.type) {
        case "BOOK_TIME":
            return {
                ...state,
                availableTimes: state.availableTimes.map((time) =>
                    time.id === action.payload ? { ...time, booked: true } : time
                ),
            };
        default:
            return state;
    }
};





export default function BookingForm() {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    // FORM SETUP
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        numberOfGuests: "",
        occasion: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Log Form Data to console
        console.log(formData);

        // Get the selected time slot from the form data
        const selectedTimeSlot = formData.time;

        // Find the corresponding ID of the selected time slot
        const selectedTimeSlotId = state.availableTimes.find(time => time.timeSlot === selectedTimeSlot).id;

        // Dispatch the action with the ID of the selected time slot
        dispatch({ type: "BOOK_TIME", payload: selectedTimeSlotId });

        // Clear the form fields
        setFormData({
            name: "",
            date: "",
            time: "",
            numberOfGuests: "",
            occasion: "",
        });
    };

    return (
        <VStack
            spacing={10}
            p={'30px'}
            bg="rgba(73, 94, 87, 0.78)"
            borderRadius={'1.5rem'}
            // color={'white'}
            backdropFilter={'auto'}
            backdropBlur={'8px'}
        >
            <Heading
                as='h2'
                color={'white'}
                fontSize={{ sm: '2xl', md: '3xl', lg: '4xl' }}
                pl={'1rem'}
            >
                Reserve a Table
            </Heading>

            <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} />
            </FormControl>

            <FormControl id="date" isRequired>
                <FormLabel>Date</FormLabel>
                <Input type="date" name="date" value={formData.date} onChange={handleChange} />
            </FormControl>

            <FormControl id="time" isRequired>
                <FormLabel>Time</FormLabel>
                <Select placeholder='Please Pick a Time' name="time" value={formData.time} onChange={handleChange}>
                    {state.availableTimes.map((availableTime) => (
                        <option key={availableTime.id} value={availableTime.timeSlot} disabled={availableTime.booked}>
                            {availableTime.booked ? `${availableTime.timeSlot} (Booked)` : availableTime.timeSlot}
                        </option>
                    ))}
                </Select>
            </FormControl>

            <FormControl id="numberOfGuests" isRequired>
                <FormLabel>Number Of Guests</FormLabel>
                <Input type="number" name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} />
            </FormControl>

            <FormControl id="occasion" isRequired>
                <FormLabel>Occasion</FormLabel>
                <Select placeholder='Tell Us the Occasion' name="occasion" value={formData.occasion} onChange={handleChange}>
                        <option value='Birthday'>Birthday</option>
                        <option value='Anniversary'>Anniversary</option>
                </Select>
            </FormControl>

            <Button bg="primary.2" onClick={handleSubmit}>Submit</Button>
        </VStack>
    );
};
