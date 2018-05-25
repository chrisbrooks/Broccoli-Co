import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../Modal';

describe('Modal', () => {

  let props;

  beforeEach(() => {
    props = {
      isOpen: true,
      onRequestClose: jest.fn()
    };
  });

  it('should call the onClick', () => {
    const wrapper = shallow(<Modal {...props} />);
    wrapper.find('.Close').simulate('click');
    expect(props.onRequestClose).toHaveBeenCalled();
  });
});
