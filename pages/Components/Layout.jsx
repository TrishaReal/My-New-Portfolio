import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Scripts from './Scripts';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charset='utf-8' />
                <meta name='author' content='themepaa' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, shrink-to-fit=no'
                />
                <meta name='keywords' content='Boston - Portfolio Template' />
                <meta
                    name='description'
                    content='Boston - Portfolio Template'
                />

                <title>Trisha Sairene Real</title>

                <link
                    rel='shortcut icon'
                    type='image/x-icon'
                    href='favicon.ico'
                />

                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossorigin
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Comforter&display=swap'
                    rel='stylesheet'
                />
                <link href='assets/css/style.css' rel='stylesheet' />
            </Head>

            {/* <div id='loading'>
                <div className='load-circle'>
                    <span className='one'></span>
                </div>
            </div> */}

            <Navbar />

            {children}

            <Footer />

            <Scripts />
        </>
    );
};

export default Layout;
