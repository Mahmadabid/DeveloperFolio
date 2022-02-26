import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { TextareaAutosize, TextField, Button } from '@material-ui/core';
import dotenv from 'dotenv';
dotenv.config();

const ContactForm = () => {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.USER_ID).then(
            () => {
                alert('Your message has been sent!');
            }
        ).catch(
            () => {
                alert('Your message could not be sent. Please try again.');
            }
        );
    }

    return (
        <div>
            <form ref={form} onSubmit={handleSubmit} className="form">
                <h2>Send a Message</h2>
                <TextField className='form-component' label="Name" variant="outlined" id="name" name='name' type='text' required />
                <TextField className='form-component' label="Email" variant="outlined" id="email" name='email' type='email' required />
                <TextareaAutosize className='form-component' minRows={8} label="Message" variant="outlined" id="Message" name='Message' type='Message' placeholder='Message *' required />
                <Button color='primary' className='form-button' variant="contained" type="submit">Send</Button>
            </form>
        </div>
    );
}

export default ContactForm;