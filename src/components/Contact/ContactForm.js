import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import { TextareaAutosize, TextField, Button, IconButton, Collapse } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

import dotenv from 'dotenv';
dotenv.config();

const ContactForm = () => {

    const forms = useRef();
    const [alert, setAlert] = useState(true);
    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setOpen(true)
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, forms.current, process.env.REACT_APP_USER_ID).then(
            () => {
                setAlert(true);
            }
        ).catch(
            () => {
                setAlert(false);
            }
        );

        forms.current.reset();

        setTimeout(() => {
            setOpen(false)
        }, 5000);
    }

    const alertMessage = (state, message, visible) => {
        return (
            <Collapse in={visible}>
                <Alert className='alert'
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    severity={state}>
                    {message}
                </Alert>
            </Collapse>
        )
    }

    return (
        <div>
            <form ref={forms} onSubmit={handleSubmit} className="form">
                <h2>Send a Message</h2>
                <TextField inputref={forms} className='form-component' label="Name" variant="outlined" id="name" name='name' type='text' required />
                <TextField inputref={forms} className='form-component' label="Email" variant="outlined" id="email" name='email' type='email' required />
                <TextareaAutosize inputref={forms} className='form-component' minRows={8} label="message" variant="outlined" id="message" name='message' type='text' placeholder='Message*' required />
                <Button color='primary' className='form-button' variant="contained" type="submit">Send</Button>
            </form>

            {alert ?
                alertMessage('success', 'Your Message has been sent.', open)
                :
                alertMessage('error', 'There was an error sending your message. Please try again.', open)}

        </div>
    );
}

export default ContactForm;