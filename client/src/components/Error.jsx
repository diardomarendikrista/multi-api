import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setError } from '../store/actions/list';
import { setErrorDetail } from '../store/actions/detail';
import { setErrorCategory } from '../store/actions/category';

export default function Error () {
  const history = useHistory();
  const dispatch = useDispatch();

  const goToHome = () => {
    dispatch(setError(false));
    dispatch(setErrorDetail(false));
    dispatch(setErrorCategory(false));
    history.push(`/`)
  }

  return (
    <div className="not-found text-center">
      <h1>Whooops...</h1>
      <p>Something error..</p>
      <button onClick={() => goToHome()} className="btn btn-outline-danger">Back to Home</button>
    </div>
  )
}