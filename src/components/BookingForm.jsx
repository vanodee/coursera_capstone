import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    FormErrorMessage,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

import { useReducer, useState } from 'react';


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

    //
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submittedValues, setSubmittedValues] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            date: '',
            time: '',
            numberOfGuests: '',
            occasion: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            date: Yup.string().required('Date is required'),
            time: Yup.string().required('Time is required'),
            numberOfGuests:
                Yup.number()
                .min(1, 'Must be at least 1 number')
                .integer('Guest count must be a Whole Number')
                .positive('Guest count must be a positive number')
                .required('Guest count is required'),
            occasion: Yup.string().required('Occasion is required'),
        }),
        onSubmit: (values, actions) => {
            // Handle form submission
            console.log('Form submitted with values:', values);

            // Get the selected time slot from the form data
            const selectedTimeSlot = values.time;

            // Find the corresponding ID of the selected time slot
            const selectedTimeSlotId = state.availableTimes.find(time => time.timeSlot === selectedTimeSlot).id;

            // Dispatch the action with the ID of the selected time slot
            dispatch({ type: "BOOK_TIME", payload: selectedTimeSlotId });

            //Reset all Form fields
            actions.resetForm();

            // Store submitted values for displaying in the Success modal
            setSubmittedValues(values);

            // Open the modal
            setIsModalOpen(true);
        },
    });

    //Custom Form Styling
    const inputFieldStyles = {
        bg: 'highlight.1',
        focusBorderColor:'primary.2'
    }
    const errorStyles = {
        bg: 'crimson',
        justifyContent: 'center',
        borderRadius: '0.3rem',
        color: 'white',
    }

    return (
        <>
            <form
                style={{width: "100%"}}
                onSubmit={formik.handleSubmit}
            >
                <FormControl isInvalid={formik.errors.name && formik.touched.name} isRequired h={'120px'}>
                    <FormLabel htmlFor="name" color={'white'}>Name</FormLabel>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        bg={'highlight.1'}
                        focusBorderColor='primary.2'
                    />
                    <FormErrorMessage sx={errorStyles}>
                        {formik.errors.name}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.errors.date && formik.touched.date} isRequired h={'120px'}>
                    <FormLabel htmlFor="date" color={'white'}>Date</FormLabel>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.date}
                        onBlur={formik.handleBlur}
                        sx={inputFieldStyles}
                    />
                    <FormErrorMessage sx={errorStyles}>
                        {formik.errors.date}
                    </FormErrorMessage>
                </FormControl>


                <FormControl isInvalid={formik.errors.time && formik.touched.time} isRequired h={'120px'}>
                    <FormLabel htmlFor="time" color={'white'}>Time</FormLabel>
                    <Select
                        id="time"
                        name="time"
                        onChange={formik.handleChange}
                        value={formik.values.time}
                        onBlur={formik.handleBlur}
                        placeholder='Please Pick a Time'
                        sx={inputFieldStyles}
                    >
                        {state.availableTimes.map((availableTime) => (
                            <option key={availableTime.id} value={availableTime.timeSlot} disabled={availableTime.booked}>
                                {availableTime.booked ? `${availableTime.timeSlot} (Booked)` : availableTime.timeSlot}
                            </option>
                        ))}
                    </Select>
                    <FormErrorMessage sx={errorStyles}>
                        {formik.errors.time}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.errors.numberOfGuests && formik.touched.numberOfGuests} isRequired h={'120px'}>
                    <FormLabel htmlFor="numberOfGuests" color={'white'}>Number Of Guests</FormLabel>
                    <Input
                        id="numberOfGuests"
                        name="numberOfGuests"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.numberOfGuests}
                        onBlur={formik.handleBlur}
                        sx={inputFieldStyles}
                    />
                    <FormErrorMessage sx={errorStyles}>
                        {formik.errors.numberOfGuests}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion} isRequired h={'120px'}>
                    <FormLabel htmlFor="occasion" color={'white'}>Occasion</FormLabel>
                    <Select
                        id="occasion"
                        name="occasion"
                        onChange={formik.handleChange}
                        value={formik.values.occasion}
                        onBlur={formik.handleBlur}
                        placeholder="What's the Occasion ?"
                        sx={inputFieldStyles}
                    >
                        <option value='Birthday'>Birthday</option>
                        <option value='Anniversary'>Anniversary</option>
                    </Select>
                    <FormErrorMessage sx={errorStyles}>
                        {formik.errors.occasion}
                    </FormErrorMessage>
                </FormControl>

                <Button bg="primary.2" type="submit">Submit</Button>
            </form>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <ModalOverlay />
                <ModalContent
                    bg={'green.500'}
                    color={'white'}
                >
                    <ModalHeader>Reservation Succesful!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {submittedValues && (
                            <p>Thank You for choosing Little Lemon, {submittedValues.name}.
                                <br />
                                Your booking for {submittedValues.date} at {submittedValues.time} has been confirmed.
                                <br />
                                We'll be expecting you and your guests for an awesome {submittedValues.occasion} celebration.
                                <br />
                                See you soon!
                            </p>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>
  )
}
