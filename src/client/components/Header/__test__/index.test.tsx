import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Header from '../index';

jest.mock('react-redux');

describe('<Header />', () => {
  it("render success", () => {
    const wrapper: ShallowWrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
