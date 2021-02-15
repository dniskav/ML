import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ResultItem from '../index';
import { ICurrentItem, IResultItem } from '../../../redux/types';

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

const resultItemProps: IResultItem = {
  currencyId: "",
  data: {
    description: "",
    status: "",
  },
  freeShipping: true,
  id: "",
  price: "",
  image: {
    src: "",
    alt: "",
  },
  location: ""
}

describe('<ResultItem />', () => {
  it("render success", () => {
    const wrapper: ShallowWrapper = shallow(<ResultItem {...resultItemProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
