import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import Loading from '../components/Loading'
import NotFound from '../pages/NotFound'
import {
  setDetailAsync
} from '../store/actions/detail'

export default function Detail () {
  const { categoryName, id } = useParams();
  const categories = useSelector(state => state.category.categories);
  const detail = useSelector(state => state.detail.detail);
  const loading = useSelector(state => state.detail.loading);
  const error = useSelector(state => state.detail.error);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(_ => {
    let dataCategory = categories.find(object => object.name === categoryName);
    if (!dataCategory) history.push(`/not-found`);
    else dispatch(setDetailAsync(dataCategory, id));
    // eslint-disable-next-line
  }, [])

  if (error) return <NotFound />
  if (loading || !detail) return <Loading />
  return (
    <div className="container text-center">
      <div>
        <img className="detail-img" src={detail.image} alt="Card cap" />
      </div>
      <div>
        <p className="detail-title">{detail.title ? detail.title.toUpperCase(): ''}</p>
      </div>
      <div>
        <p className="detail-text">{detail.description}</p>
      </div>
    </div>
  )
}
