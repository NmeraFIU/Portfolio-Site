import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef()
    useEffect(() => {
        document.title = 'Norberto Merani | Contact';
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
          .sendForm('contact_service', 'contact_form', refForm.current, '7sXsGRYY2Nxxbt2bf')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
        <div className = "container contact-page">
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx = {15}
                    />
                </h1>
                <p>
                    If you would like to get in touch with me, you can call or text me on my mobile phone through the number 305 - 
                    781 - 1877. You can also send me an email at norberto.merani@gmail.com.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" id="inputID" name="from_name" placeholder="Name" color="#F0F2EF" required />
                            </li>
                            <li className='half'>
                                <input type="email" id="inputID" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" id="inputID" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" id="inputID" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" id="inputID" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact