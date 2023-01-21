import React from 'react';

const Portfolio = () => {
    const devProjectsData = [
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
    ];

    const graphicProjectsData = [
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
        {
            img: '',
            title: '',
            subtitle: '',
        },
    ];

    return (
        <section data-scroll-index='3' className='section work-section bg-gray'>
            <div className='container'>
                <div className='row section-heading'>
                    <div className='col-lg-6'>
                        <h6>
                            <span>Portfolio</span>
                        </h6>
                        <h3>
                            <span>I Miei Progetti</span>
                        </h3>
                    </div>
                </div>
                <div className='row g-4 lightbox-gallery'>
                    {devProjectsData.map((val, key) => {
                        return (
                            <div className='col-sm-6 col-lg-4' key={key}>
                                <div className='portfolio-box'>
                                    <div className='portfolio-img'>
                                        <a
                                            href={val.img}
                                            className='gallery-link'
                                        >
                                            <img
                                                src={val.img}
                                                title=''
                                                alt=''
                                            />
                                        </a>
                                    </div>
                                    <div className='portfolio-info'>
                                        <h6>{val.title}</h6>
                                        <span>{val.subtitle}</span>
                                        <a
                                            href='assets/img/project-1.jpg'
                                            className='gallery-link'
                                        >
                                            <i className='fas fa-arrow-right'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
