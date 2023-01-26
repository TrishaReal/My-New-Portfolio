import { useEffect, useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [Name, setName] = useState('');
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
            Name.length > 1 &&
            nameRegex.test(Name) &&
            lastName.length > 1 &&
            nameRegex.test(lastName) &&
            emailRegex.test(email) &&
            message.length > 0
        ) {
            setValid(true);
        } else setValid(false);
    }, [Name, lastName, email, message]);

    const clean = () => {
        setName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    const sendEmail = () => {
        setEmailSent(true);

        const greetingsEmail = {
            from: email,
            type: 'greetings',
            subject: 'Grazie per avermi contatta!',
            preheader: 'Grazie per avermi contatta!',
            greetings: `Gentile  <strong>${Name} ${lastName}</strong>,`,
            message:
                'Grazie per avermi contatta! <br> Esaminerò la tua richiesta e ti contatterò il prima possibile. <br> Nel frattempo seguimi su <b>LinkedIn</b> per altre informazioni. <br> <br> Cordiali Saluti, <br> Trisha.  ',
            callToAction: {
                name: 'Seguimi su LinkedIn',
                href: 'https://www.linkedin.com/in/graphic-web-trisha',
                active: true,
            },
            conclusion: '',
            thanks: '',
            unsubscribe: {
                name: "Annulla l'iscrizione",
                href: 'http://localhost:3000/',
                message: 'Email invadenti?',
                active: false,
            },
            footer: {
                name: '© 2023, Offerta da',
                href: 'www.trishasairenereal.app',
                message: 'trishasairenereal.app',
                active: true,
            },
        };

        const summaryEmail = {
            from: email,
            type: 'summary',
            subject: 'Congratulazioni Trisha, hai ricevuto una richiesta!',
            preheader: 'Congratulazioni Trisha, hai ricevuto una richiesta!',
            greetings: `Ciao Trisha, <strong>${Name} ${lastName}</strong> ti ha inviato un messaggio:`,
            message: `<i>${message}</i>`,
            callToAction: {
                name: '',
                href: 'https://trishasairenereal.app',
                active: false,
            },
            conclusion: `Rispondi e contatta <strong>${Name}</strong> all'email: <strong>${email}</strong>.`,
            thanks: 'Buon Lavoro!',
            unsubscribe: {
                name: "Annulla l'iscrizione",
                href: 'http://localhost:3000/',
                message: 'Email invadenti?',
                active: false,
            },
            footer: {
                name: '© 2023, Offerta da',
                href: 'www.trihasairenereal.app',
                message: 'trishasairenereal.app',
                active: true,
            },
        };

        const emails = { data: [greetingsEmail, summaryEmail] };

        fetch('/api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(emails),
        })
            .then((response) => response.json())
            .then(() => {
                setEmailSent(true);
                clean();
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error(
                    JSON.stringify(
                        'Oh no! Qualquadra non cosa, ti prego di riprovare.'
                    )
                );
                clean();
            });
    };

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

                                {!nameRegex.test(Name) ||
                                Name.length < 2 ||
                                !nameRegex.test(lastName) ||
                                lastName.length < 2 ||
                                !emailRegex.test(email) ||
                                message.length < 1 ? (
                                    <p className='lead pb-3'>
                                        Compilare tutti i campi, per favore.*
                                    </p>
                                ) : (
                                    <p
                                        className='lead pb-3 ready-submit'
                                        style={{ color: 'green' }}
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
                                                        setName(e.target.value)
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
                                                    placeholder='La tua email *'
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
                                                <div
                                                    className='send'
                                                    onClick={() => sendEmail()}
                                                >
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
                        {emailSent && (
                            <div className='contact-form'>
                                <div className='message-confirmed col-md-12'>
                                    <h2>
                                        Grazie per il tuo messaggio! <br />
                                        Presto ti invierò una risposta.
                                    </h2>
                                    <div className='confirm-icon'>
                                        <img
                                            src='assets/img/confirm.svg'
                                            alt='confirm feedback image'
                                        />
                                    </div>
                                </div>
                                <div className='back-to-form col-md-12'>
                                    <img
                                        src='assets/img/back-arrow.svg'
                                        alt=''
                                    />
                                    <p>Torna al form iniziale</p>
                                </div>
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

                <Toaster position='top-right' reverseOrder={false} />
            </div>
        </section>
    );
};

export default Contact;
