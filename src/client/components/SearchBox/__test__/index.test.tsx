import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SearchBox from '../index';
import { ICurrentItem } from '../../../redux/types';

const currentItem: ICurrentItem = {
  condition: "new",
  currency_id: "",
  description: "",
  pictures: [],
  price: "",
  sold_quantity: "",
  title: ""
};

jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
    useSelector: (selectorName: any) => {
          return currentItem;
      }
  };
});

jest.mock('react-router', () => ({
  useParams: () => jest.fn({ id: '1' } as any),
}));


describe('<SearchBox />', () => {
  it("render success", () => {
    const wrapper: ShallowWrapper = shallow(<SearchBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
