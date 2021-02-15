import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SearchResults from '../index';
import { IResultCollection } from '../../../redux/types';

const resultCollection: IResultCollection = {
  results: [
    {
      id: "",
      image: { 
        src: "",
        alt: "",
      },
      price: "",
      freeShipping: true,
      currencyId: "",
      data: {
        description: "",
        status: "",
      },
      location: "",
    },
  ],
};

jest.mock('react-router', () => ({
  useParams: () => jest.fn({ id: '1' } as any),
}));

describe('<SearchResults />', () => {
  it('render success', () => {
    const wrapper: ShallowWrapper = shallow(<SearchResults {...resultCollection}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
