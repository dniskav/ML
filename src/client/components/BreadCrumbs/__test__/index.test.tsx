import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import BreadCrumbs from '../index';

jest.mock('react-router', () => ({
  useParams: () => jest.fn({ id: '1' } as any),
}));

const breadCrumbsProps: any = {
  bName: "",
  bUrl: "",
}

describe('<BreadCrumbs />', () => {
  it("render success", () => {
    const wrapper: ShallowWrapper = shallow(<BreadCrumbs data={breadCrumbsProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
