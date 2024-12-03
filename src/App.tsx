import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { FormInput } from './components/FormInput';
import { BrazilianPhoneInput } from './components/BrazilianPhoneInput';
import { validateEmail, validatePhone, validateName } from './utils/validation';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hasDegree: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone)
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      // Form is valid, handle submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 px-8 py-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <GraduationCap size={32} />
                <h1 className="text-2xl font-bold">Facuminas</h1>
              </div>
            </div>
            <p className="mt-4 text-blue-100">
              Transforme sua carreira com nossa pós-graduação online. 
              Educação de qualidade que se adapta à sua rotina.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <FormInput
              label="Nome Completo"
              type="text"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              error={errors.name}
              placeholder="Digite seu nome completo"
            />

            <FormInput
              label="Email"
              type="email"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              error={errors.email}
              placeholder="seu@email.com"
            />

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <BrazilianPhoneInput
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value })}
                error={errors.phone}
              />
            </div>

            <div className="space-y-1">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.hasDegree}
                  onChange={(e) => setFormData({ ...formData, hasDegree: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                />
                <span className="text-sm font-medium text-gray-700">
                  Já possui graduação?
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold
                hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2
                focus:ring-blue-500 focus:ring-offset-2"
            >
              Quero começar minha pós-graduação
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;