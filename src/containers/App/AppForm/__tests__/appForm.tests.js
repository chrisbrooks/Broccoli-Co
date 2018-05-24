import React from 'react';
import { shallow } from 'enzyme';
import { AppForm } from '../AppForm';

let props;

beforeEach(() => {
  props = {
    handleSubmit: jest.fn(),
    toggleModal: false,
    pristine: false,
    valid: false,
    signUpSuccess: false,
    signUpError: null
  };
});

describe('<AppForm />', () => {
  it('should check the Title is correct for the form', () => {
    props.signUpSuccess = true;
    props.toggleModal = true;
    const wrapper = shallow(<AppForm {...props} />);
    expect(wrapper.find('.Title').text()).toEqual('All done!');
  });
});
