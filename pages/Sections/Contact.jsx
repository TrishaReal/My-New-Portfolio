import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [valid, setValid] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const nameRegex = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const contactData = [
        {
            title: 'Phone',
            info: '(+39) 327 407 3331',
            icon: 'fas fa-envelope',
        },
        {
            title: 'Email',
            info: 'trishasairenereal@gmail.com',
            icon: 'fas fa-phone-alt',
        },
        {
            title: 'Location',
            info: 'Cagliari, Sardegna, Italy',
            icon: 'fas fa-map-marker-alt',
        },
    ];

    useEffect(() => {
        if (
            firstName.length > 1 &&
            nameRegex.test(firstName) &&
            lastName.length > 1 &&
            nameRegex.test(lastName) &&
            emailRegex.test(email) &&
            message.length > 0
        ) {
            setValid(true);
        } else setValid(false);
    }, [firstName, lastName, email, message]);

    //   const clean = () => {
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setMessage("");
    //   };

    //   const sendEmail = () => {
    //     setValid(true);

    return (
        <section
            data-scroll-index='4'
            id='contact'
            className='section contact-section gradient-top '
        >
            <div className='container'>
                <div className='row section-heading'>
                    <div className='col-lg-6'>
                        <h6>
                            <span>Contattami!</span>
                        </h6>
                        <h3>
                            <span>Progetti in mente?</span>
                        </h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        {!emailSent && (
                            <div className='contact-form'>
                                <h6>Inviami un'email</h6>

                                {!nameRegex.test(firstName) ||
                                firstName.length < 2 ||
                                !nameRegex.test(lastName) ||
                                lastName.length < 2 ||
                                !emailRegex.test(email) ||
                                message.length < 1 ? (
                                    <p className='lead pb-3'>
                                        Si prega di compilare tutti i campi. *
                                    </p>
                                ) : (
                                    <p
                                        className='lead pb-3 ready-submit'
                                        style={{ color: '#5C64CF' }}
                                    >
                                        Pronto all'invio!&nbsp;&nbsp;✔
                                    </p>
                                )}
                                <form id='contact-form' method='POST'>
                                    <div className='row gx-3 gy-4'>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    autoComplete='off'
                                                    id='name'
                                                    placeholder='Nome *'
                                                    className='form-control'
                                                    type='text'
                                                    onChange={(e) =>
                                                        setFirstName(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <input
                                                    autoComplete='off'
                                                    onChange={(e) =>
                                                        setLastName(
                                                            e.target.value
                                                        )
                                                    }
                                                    id='name'
                                                    placeholder='Cognome *'
                                                    className='form-control'
                                                    type='text'
                                                />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='form-group'>
                                                <input
                                                    id='email'
                                                    placeholder='Email *'
                                                    className='form-control'
                                                    type='email'
                                                    autoComplete='off'
                                                    aria-required='true'
                                                    aria-invalid={
                                                        !emailRegex.test(
                                                            email
                                                        ) && email.length > 2
                                                            ? 'true'
                                                            : 'false'
                                                    }
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group'>
                                                <textarea
                                                    id='message'
                                                    placeholder='Scrivi un messaggio *'
                                                    rows='4'
                                                    className='form-control'
                                                    autoComplete='off'
                                                    onChange={(e) =>
                                                        setMessage(
                                                            e.target.value
                                                        )
                                                    }
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            {!valid && (
                                                <div className='send'>
                                                    <button
                                                        className='px-btn btn-disabled'
                                                        disabled
                                                    >
                                                        Invia
                                                    </button>
                                                </div>
                                            )}
                                            {valid && (
                                                <div className='send'>
                                                    <button className='px-btn px-btn-theme2'>
                                                        Invia
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                    <div className='col-lg-5 ms-auto col-xl-4 pt-5 pt-lg-0'>
                        <ul className='contact-infos'>
                            {contactData.map((val, key) => {
                                return (
                                    <li key={key}>
                                        <div className='icon'>
                                            <i className={val.icon}></i>
                                        </div>
                                        <div className='col'>
                                            <h5>{val.title}</h5>
                                            <p>{val.info}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className='text-center pt-5'>
                            <img src='assets/img/contact.svg' title='' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
