import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchItemsList } from '../../redux/actions';
import PDP from '../ProductDetail/index';

const Routing = () => {

  return (
    <Router>
      <QueryParams />
      <Route path="/items/:id" children={<PDP />}/>
    </Router>
  );
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const QueryParams = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const q = query.get("search");

  useEffect(() => {
    dispatch(fetchItemsList(q));
  }, [q, dispatch]);

  return (<div></div>);
}

export default Routing;
