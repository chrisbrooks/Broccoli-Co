import React from 'react';
import { shallow } from 'enzyme';
import RenderTextInput from '../RenderTextInput';

describe('<RenderTextInput />', () => {

  let props;

  beforeEach(() => {
    props = {
      meta: {
        touched: true,
        error: 'this is an error',
      },
      type: 'text'
    };
  });

  it('should check the error messaging and classNames', () => {
    const wrapper = shallow(<RenderTextInput {...props} />);
    expect(wrapper.find('.ErrorMessage').length).toEqual(1);
    expect(wrapper.find('.ErrorMessage').props().children).toEqual('this is an error');
  });

  it('should check the input type is defined', () => {
    const wrapper = shallow(<RenderTextInput {...props} />);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('input').props().type).toEqual('text');
  });

  it('should check if label is rendered', () => {
    const wrapper = shallow(<RenderTextInput {...props} label="foo" />);
    expect(wrapper.find('label').text()).toEqual('foo');
  });

});
