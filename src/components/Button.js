import React from 'react';

const Button = ({ className, text, onClick, questId, dataType }) => {

    const handleClick = () => {
        if (typeof onClick === 'function') onClick();
    };

    if (questId == 1 ) {


        if (dataType == "Back") {
            //console.log(dataType);

            return (
                <button className={className} dataType={dataType}  disabled onClick={handleClick}>{text}</button>
            )
        } else {
            return (
                <button className={className} dataType={dataType}  onClick={handleClick}>{text}</button>
            )
        }

    } else {
        return (
            <button className={className} onClick={handleClick}>{text}</button>
        )
    }



};


export default Button;