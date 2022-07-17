import styles from './contact.module.css'
import { useState} from 'react';
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import emailjs from '@emailjs/browser';
import { UilMessage } from '@iconscout/react-unicons'
import { UilEnvelopeUpload } from '@iconscout/react-unicons'
import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [approved, setApproved] = useState(false);
  const [declined, setDeclined] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    if(nameValue != '' || emailValue != '' || messageValue != ''){
    emailjs.sendForm('service_44dg7iw', 'template_136worn', form.current, 'gqWW8NbNmt5pkc06H')
      .then((result) => {
          console.log(result.text);
          setApproved(true);
        setDeclined(false);
        setTimeout(() => {
            setApproved(false);
       }, 5000);
      }, (error) => {
          console.log(error.text);
        setApproved(false);
        setDeclined(true);
        setTimeout(() => {
          setDeclined(false);
       }, 5000);
      });

    setNameValue('');
    setEmailValue('');
    setMessageValue('');
    }
  };
  
  return(
    <>
      <div className={styles.contact} id="contact">
        <h1 className={styles.title}>Conatct</h1>
        <div className={styles.content}>
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.inputs}>
              <input name="user_name" value={nameValue} type="text" placeholder="Name" onChange={e => setNameValue(e.target.value)} />
              <input name="user_email" value={emailValue} type="email" placeholder="Email"  onChange={e => setEmailValue(e.target.value)}/>
            </div>
            <div className={styles.inputs2}>
              <textarea name="message" value={messageValue} placeholder="Message" col="40" row="20" onChange={e => setMessageValue(e.target.value)} />
              
          {approved ? <p className={styles.successpara}>Your message was sent!</p> : declined ?  <p className={styles.errorpara}>Something went wrong</p>: <button type="submit" className={styles.btn}>SEND<UilMessage className={styles.iconsend} color="#E2E2E2" size="30"/></button>}
          
            </div>
          
          </form>

          <div className={styles.mailto}>
            <h2 className={styles.mailhead}>Email</h2>
            <p className={styles.maillink}>elnatansamuel22@gmail.com</p>
            <h2 className={styles.mailhead}>Link up</h2>
            <div className={styles.icons}>
              
              <a target="_blank" className={styles.linkicon} href="https://github.com/ElnatanSamuel"><UilGithub  size="30" color="#14FFEC"/></a>
              <a target="_blank" className={styles.linkicon} href="https://www.linkedin.com/in/elnatan-samuel-b3473b245/"><UilLinkedinAlt size="30" color="#14FFEC" /></a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Contact;