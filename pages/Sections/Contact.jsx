import React from 'react';

const Contact = () => {
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

    return (
        <section
            data-scroll-index='4'
            id='contactus'
            className='section contactus-section bg-gray'
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
                        <div className='contact-form'>
                            <h6>Get in touch</h6>
                            <p className='lead'>
                                Our friendly team would love to hear from you.
                            </p>
                            <form id='contact-form' method='POST'>
                                <div className='row gx-3 gy-4'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                First name
                                            </label>
                                            <input
                                                name='Name'
                                                id='name'
                                                placeholder='Name *'
                                                className='form-control'
                                                type='text'
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Your Email
                                            </label>
                                            <input
                                                name='Email'
                                                id='email'
                                                placeholder='Email *'
                                                className='form-control'
                                                type='email'
                                            />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Subject
                                            </label>
                                            <input
                                                name='Subject'
                                                id='subject'
                                                placeholder='Subject *'
                                                className='form-control'
                                                type='text'
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Your message
                                            </label>
                                            <textarea
                                                name='message'
                                                id='message'
                                                placeholder='Your message *'
                                                rows='4'
                                                className='form-control'
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='send'>
                                            <button
                                                className='px-btn px-btn-theme2'
                                                type='button'
                                                value='Send'
                                            >
                                                {' '}
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
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
