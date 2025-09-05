import React from 'react'

export default function SelectField({
    label,
    id,
    value,
    onChange,
    options,
    placeholder,
    error,
    required = false,
    disabled = false,
    icon: Icon
}) {
  return (
    <div className=''>
        <label htmlFor={id} className=''>
            {label}
            {required && <span className=''>*</span>}
        </label>
        <div className=''>
            {Icon && (
                <div className=''>
                    <Icon className=''/>
                </div>
            )}
            <select 
            id={id}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`w-full ${
                Icon ? 'pl-10' : 'pl-3'
            } pr-10 py-2.5 border rounded-lg text-base transition-colors duration-200 disabled:bg-gray-50 disabled:text-gray-500 ${
                error 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-opacity-20 appearance-none bg-white`}></select>
        </div>
    </div>
  )
}
