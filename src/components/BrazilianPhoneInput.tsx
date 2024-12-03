import React from 'react';

interface BrazilianPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function BrazilianPhoneInput({ value, onChange, error }: BrazilianPhoneInputProps) {
  const formatPhoneNumber = (input: string) => {
    const numbers = input.replace(/\D/g, '');
    if (numbers.length <= 11) {
      let formatted = numbers.replace(/(\d{2})(\d)/, '($1) $2');
      formatted = formatted.replace(/(\d{4,5})(\d)/, '$1-$2');
      return formatted;
    }
    return input;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    onChange(formatted);
  };

  return (
    <div className="space-y-1">
      <input
        type="tel"
        value={value}
        onChange={handleChange}
        placeholder="(XX) XXXXX-XXXX"
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}