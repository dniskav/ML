import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

jest.mock('react-redux');

describe('<App />', () => {
  it("render success", () => {
    const wrapper: ShallowWrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
