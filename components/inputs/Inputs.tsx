import React from 'react';

const Inputs = ({ label, typeInput, value, onChange }: { label: string, typeInput: string, value: any, onChange: (value: any) => void }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col w-full">
      {label && <label className="block mb-3 pr-1 text-lg font-medium text-white">{label}</label>}
      <input
        type={typeInput}
        id="first_name"
        className="border text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-5"
        required
        autoComplete='off'
        value={value}
        onChange={handleChange} 
      />
    </div>
  );
}

export default Inputs;
