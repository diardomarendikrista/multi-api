import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import ListCard from '../components/ListCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import {
  setListAsync
} from '../store/actions/list'

export default function List () {
  const { categoryName } = useParams();
  const categories = useSelector(state => state.category.categories);
  const lists = useSelector(state => state.list.lists);
  const loading = useSelector(state => state.list.loading);
  const error = useSelector(state => state.list.error);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(_ => {
    let dataCategory = categories.find(object => object.name === categoryName);
    if (!dataCategory) history.push(`/not-found`);
    else dispatch(setListAsync(dataCategory)); 
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        {
          error ? <Error /> :
          loading ? <Loading /> :
          lists.map(list => (
            <ListCard
              data={list}
              key={list.id}
            />
          ))
        }
      </div>
    </div>
  )
}

