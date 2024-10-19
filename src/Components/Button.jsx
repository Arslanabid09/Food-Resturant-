import React from 'react'

const Button = ({
    label,
    onClick,
    className
}) => <button onClick={onClick} className={`bg-amber-500  rounded-md py-3 font-semibold tracking-wider  text-white ${className}`}>
            {label}
          </button>

export default Button