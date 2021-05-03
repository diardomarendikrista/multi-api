import React from 'react';
import { useHistory, useParams } from "react-router-dom";

export default function ListCard(props) {
  const { categoryName } = useParams();
  const { data } = props;

  const history = useHistory();

  const goToDetail = () => {
    history.push(`/${categoryName}/${data.id}`)
  }

  return (
    <div onClick={() => goToDetail()} className="card card-list">
      <div className="card-img-container">
        <img className="card-img-top card-img-category" src={data.image} alt="Card cap" />
      </div>
      <div className="card-body card-body-category">
        <p className="card-title">{data.title.toUpperCase()}</p>
      </div>
    </div>
  );
}