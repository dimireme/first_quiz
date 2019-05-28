import React from 'react';

const ButtonBack = ({ className, text, onClick, questId }) => {

    const handleClick = () => {
        if (typeof onClick === 'function') onClick();
    };

    if (questId == 1) {

        return (
            <button  className={className} disabled onClick={handleClick}>{text}</button>
        )
    } else {
        return (
            <button  className={className} onClick={handleClick}>{text}</button>
        )
    }



};


export default ButtonBack;