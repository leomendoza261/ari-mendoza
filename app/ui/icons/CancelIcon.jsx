import React from 'react';

const CancelIcon = ({ size = 24, strokeColor = "currentColor", strokeWidth = 1.5, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={strokeWidth}
            stroke={strokeColor}
            className={`w-${size} h-${size} rounded-xl bg-red-200 text-black hover:text-red-700`}
            {...props}
        >
            <path 
                strokeLinecap="round"
                strokeLinejoin="round" 
                d="M6 18 18 6M6 6l12 12" 
            />
        </svg>

    );
};

export default CancelIcon;


