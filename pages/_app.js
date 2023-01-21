import '@/styles/globals.css';
import { useEffect } from 'react';
import Layout from './Components/Layout';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        window.jQuery = require('../public/assets/js/jQuery.js');

        window.scrollIt = require('../public/assets/js/custom.js');
        import('../public/assets/js/custom.js');
    }, []);

    return (
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
    );
}
