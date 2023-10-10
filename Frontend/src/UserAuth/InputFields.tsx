import React from 'react';

type InputProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  error: string;
};

const InputField: React.FC<InputProps> = ({ label, name, type, value, onChange, error }) => {
  return (
    <div>
      <label htmlFor={name}><b>{label}</b></label>
      <input
        type={type}
        placeholder={`Enter ${label}`}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className='text-sm font-bold text-red-600 errText font-popins'>{error}</p>}
    </div>
  );
};

export default InputField;
