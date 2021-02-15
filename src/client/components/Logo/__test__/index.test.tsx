import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Logo from '../index';

jest.mock('react-redux');

describe('<Logo />', () => {
  it("render success", () => {
    const wrapper: ShallowWrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
