export const validateEmail = (email: string): string => {
  if (!email) return 'Email é obrigatório';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Email inválido';
  return '';
};

export const validatePhone = (phone: string): string => {
  if (!phone) return 'Telefone é obrigatório';
  const numbers = phone.replace(/\D/g, '');
  if (numbers.length !== 11) return 'Telefone inválido';
  return '';
};

export const validateName = (name: string): string => {
  if (!name) return 'Nome é obrigatório';
  if (name.length < 3) return 'Nome deve ter pelo menos 3 caracteres';
  return '';
};