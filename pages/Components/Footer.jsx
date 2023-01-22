import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 py-2'>
                        <div className='nav justify-content-center justify-content-md-start'>
                            <a
                                target='_blank'
                                href='https://github.com/TrishaReal'
                            >
                                <i class='fab fa-github'></i>
                            </a>
                            <a
                                target='_blank'
                                href='www.linkedin.com/in/graphic-web-trisha'
                            >
                                <i className='fab fa-linkedin-in'></i>
                            </a>
                            <a
                                target='_blank'
                                href='https://www.behance.net/trishasairenereal'
                            >
                                <i class='fab fa-behance'></i>
                            </a>
                        </div>
                    </div>
                    <div className='col-md-6 py-2 text-center text-md-end'>
                        <p className='m-0'>
                            © 2023 copyright all right reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
