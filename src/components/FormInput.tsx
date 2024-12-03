import React from 'react';

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

export function FormInput({ label, type, value, onChange, error, placeholder }: FormInputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}