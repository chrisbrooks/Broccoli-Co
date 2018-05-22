import React from 'react';
import { shallow } from 'enzyme';
import AppComponent from '../App';

let props;

beforeEach(() => {
  props = {
    toggleLeftSidebar: jest.fn(),
    getUserLocation: jest.fn()
  };
});

describe('<App />', () => {
  it('should check the Default layout is rendered', () => {
    const wrapper = shallow(<AppComponent {...props} />);
    expect(wrapper.find('.Container').length).toBe(1);
  });

  it('should test componentWillUnmount', () => {
    const wrapper = shallow(<AppComponent {...props} />);
    wrapper.instance().componentDidMount();
    expect(props.toggleLeftSidebar).toHaveBeenCalled();
    expect(props.getUserLocation).toHaveBeenCalled();
  });
});
