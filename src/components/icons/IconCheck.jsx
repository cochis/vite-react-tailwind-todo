import React from 'react'

const IconCheck = ({ fill = "#fff", ...props }) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            width="11"
            height="9"
            stroke="#FFF"
            strokeWidth="2"

        >
            <path
                d="M1 4.304L3.696 7l6-6" /></svg>
    )
}

export default IconCheck