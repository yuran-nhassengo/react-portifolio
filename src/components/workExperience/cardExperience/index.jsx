import React from 'react';

export const ExperienceCard = ({ details }) => {
    return (
        <div className="flex flex-col items-center p-6 shadow-lg rounded-lg border border-red-300 bg-white">
            <h1 className="text-xl font-semibold mb-4 text-red-400">{details.title}</h1>
            <div className='text-red-400'>
                <ul>
                    {details.responsabilities.map((item, index) => (
                        <li key={index} className="mb-2">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
