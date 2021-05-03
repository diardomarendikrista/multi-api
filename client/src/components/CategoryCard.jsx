import React from 'react';
import { useHistory } from "react-router-dom";

export default function CategoryCard(props) {
  const { category } = props;
  const history = useHistory();

  const goToList = () => {
    history.push(`/${category.name}`)
  }

  return (
    <div onClick={() => goToList()} className="card card-category">
      <div className="card-img-container">
        <img className="card-img-top card-img-category" src={category.image} alt="Card cap" />
      </div>
      <div className="card-body card-body-category">
        <p className="card-title">{category.name.toUpperCase()}</p>
      </div>
    </div>
  );
}
