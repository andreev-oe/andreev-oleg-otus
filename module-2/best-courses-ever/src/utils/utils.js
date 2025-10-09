import bcrypt from 'bcrypt';

/**
 * Хеширование пароля
 * @param {string} password - пароль
 */
export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};
