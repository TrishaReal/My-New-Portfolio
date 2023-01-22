import React from 'react';

const Languages = () => {
    const languagesData = [
        {
            id: 0,
            value: 'it',
            iso: 'ITA',
            label: 'ita.png',
            current: false,
        },
        {
            id: 1,
            value: 'eng',
            iso: 'ENG',
            label: 'eng.png',
            current: false,
        },
    ];

    return (
        <div className='languages'>
            <ul>
                {languagesData.map((val, key) => {
                    return (
                        <li key={key} className='d-flex '>
                            <a locale={val.value}>{val.iso}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Languages;
