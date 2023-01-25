import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import ArrowGoTop from '../../public/assets/img/go-top.png';

const GoTop = () => {
    const [thePosition, setThePosition] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 740) {
                setThePosition(true);
            } else {
                setThePosition(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        (thePosition && (
            <div className='go-top'>
                <Image
                    priority
                    className='go-top-btn'
                    src={ArrowGoTop}
                    onClick={() => scrollToTop()}
                    width='30'
                    height='30'
                    alt='Go top button'
                />
            </div>
        )) || <></>
    );
};

export default GoTop;
