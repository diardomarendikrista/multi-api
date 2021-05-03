import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setErrorDetail } from '../store/actions/detail';

export default function NotFound () {
  const history = useHistory();
  const dispatch = useDispatch();

  const goToHome = () => {
    dispatch(setErrorDetail(false));
    history.push(`/`);
  }

  return (
    <div className="not-found text-center">
      <h1>404 NOT FOUND</h1>
      <p>Oh noo.. the page you are request are not found</p>
      <button onClick={() => goToHome()} className="btn btn-outline-danger">Back to Home</button>
    </div>
  )
}