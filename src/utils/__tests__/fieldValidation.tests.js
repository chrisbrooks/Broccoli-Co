import {
  minLength,
  email,
  confirmEmail,
  required
} from '../fieldValidation';

it('should validate minLength', () => {
  expect(minLength('Email', 3)('sd')).toEqual('Email must be no less than 3 characters');
  expect(minLength('Email')('df')).toEqual('Email must be no less than 3 characters');
  expect(minLength('Email', 15)('sdsdskfdsfsdfdsflfjdlk')).toEqual(undefined);
});

it('should validate required field', () => {
  expect(required('Email')('')).toEqual('Email is required');
  expect(required('Email')('sdsdsd')).toEqual(undefined);
});

it('should validate email field', () => {
  expect(email('sdsdsdsdfkdsjfkosdfjlsjfsldkf@sdfksjdfsdsdsdsdsdsdsdsdsdlksdj')).toEqual('Not a valid email address');
  expect(email('sdsd@sdsd')).toEqual('Not a valid email address');
  expect(email('nikola@gmail.')).toEqual('Not a valid email address');
  expect(email('nikola@gmail.com')).toEqual(undefined);
});

it('should validate confirmEmail', () => {
  email('sdsdWsdsd@dddd.com');
  expect(confirmEmail('')).toEqual('This needs to match the new email address');
  expect(confirmEmail('sdsdWsdsd@dddd.com')).toEqual(undefined);
});
