import React from 'react';

export const Input = ({ className, ...props }) => (
  <input className={`border rounded px-2 py-1 ${className}`} {...props} />
);

export const Button = ({ className, children, ...props }) => (
  <button className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
);

export const Checkbox = ({ id, label, ...props }) => (
  <div className="flex items-center">
    <input type="checkbox" id={id} className="mr-2" {...props} />
    <label htmlFor={id}>{label}</label>
  </div>
);