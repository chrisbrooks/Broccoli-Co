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
    signUpError: null,
    postSignUpForm: jest.fn(() => Promise.resolve()),
    submitForm: jest.fn(),
    reset: jest.fn(),
    resetStore: jest.fn(),
    onRequestClose: jest.fn()
  };
});

describe('<AppForm />', () => {
  it('should check the render if signUpSuccess', () => {
    props.signUpSuccess = true;
    const wrapper = shallow(<AppForm {...props} />);
    expect(wrapper.find('.Title').text()).toEqual('All done!');
    expect(wrapper.find('.SuccessText').length).toEqual(1);
  });

  it('should check the render if signUpSuccess is false', () => {
    props.signUpSuccess = false;
    const wrapper = shallow(<AppForm {...props} />);
    expect(wrapper.find('.Title').text()).toEqual('Request an invite');
    expect(wrapper.find('Form').length).toEqual(1);
  });

  it('should check the loading button props when data is being posted and invalid', () => {
    const wrapper = shallow(<AppForm {...props} />);
    wrapper.setState({
      isPostingData: true
    });
    expect(wrapper.find('.Button').props().disabled).toBe(true);
    expect(wrapper.find('.Button').props().loading).toBe(true);
  });

  it('should check submit form and the correct props have been called', () => {
    const values = {
      fullName: 'sdsdsd',
      email: 'dfdf@sdsd.com'
    };

    props.valid = true;
    props.postSignUpForm = jest.fn(() => Promise.resolve({
      response: {
        data: 'Registered'
      }
    }));

    const wrapper = shallow(<AppForm {...props} />);

    wrapper.setState({
      isPostingData: true
    });

    wrapper.instance().submitForm(values)
      .then(() => {
        expect(props.reset).toHaveBeenCalled();
        expect(wrapper.state().isPostingData).toEqual(false);
      })
      .catch(() => {});

    expect(props.postSignUpForm).toHaveBeenCalled();
    expect(props.postSignUpForm).toHaveBeenCalledWith({
      name: values.fullName,
      email: values.email
    });
  });

  it('should check the loading button props when data is being posted and invalid', () => {
    props.signUpSuccess = true;
    const wrapper = shallow(<AppForm {...props} />);
    wrapper.find('.Button').simulate('click');
    expect(props.reset).toHaveBeenCalled();
    expect(props.resetStore).toHaveBeenCalled();
    expect(props.onRequestClose).toHaveBeenCalled();
  });
});
