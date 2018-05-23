import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';

export const required = field => value => (typeof value !== 'string' || isEmpty(value.trim()) ? `${field} is required` : undefined);

export const email = value => (value && !isEmail(value) ? 'Not a valid email address' : undefined);

export const confirmEmail = (value) => {
  if (typeof value !== 'string' ||
    isEmpty(value.trim()) ||
    (email(value) && value.trim() !== email(value).trim())) {
    return 'This needs to match the new email address';
  }

  return undefined;
};
