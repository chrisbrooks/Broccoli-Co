import React from 'react';

import { shallow } from 'enzyme';
import { App } from '../App';

describe('<AppForm />', () => {

  it('should check the modal is opened on click', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      toggleModal: false
    });
    wrapper.find('BlockButton').simulate('click');
    expect(wrapper.state().toggleModal).toEqual(true);
  });

  it('should check the modal is closed on click', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      toggleModal: true
    });
    wrapper.instance().handleCloseModal();
    expect(wrapper.state().toggleModal).toEqual(false);
  });
});
