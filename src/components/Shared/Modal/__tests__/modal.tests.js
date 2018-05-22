import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../Modal';

describe('Pill tests', () => {

  let props;

  beforeEach(() => {
    props = {
      isOpen: true,
      contentLabel: 'content label',
      children: [],
      onRequestClose: jest.fn()
    };
  });

  it('should call the onClick', () => {
    const alert = shallow(<Modal {...props} />);

    alert.find('Icon').simulate('click');

    expect(props.onRequestClose).toHaveBeenCalled();
  });
});
