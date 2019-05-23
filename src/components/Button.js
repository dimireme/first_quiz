import React from 'react';

const Button = ({ className, text, onClick }) => {

    const handleClick = () => {
        if (typeof onClick === 'function') onClick();
    };

    return (
        <button className={className} onClick={handleClick}>{text}</button>
    )
};


export default Button;