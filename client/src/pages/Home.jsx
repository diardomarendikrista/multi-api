import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from '../components/CategoryCard';

export default function Home () {
  const categories = useSelector(state => state.category.categories);

  useEffect(_ => {
    document.title = "Multi API";
  }, [])

  return (
    <div className="container-home">
      <div className="d-flex flex-wrap justify-content-center">
        {
          categories.map(category => (
            <CategoryCard
              category={category}
              key={category.id}
            />
          ))
        }
      </div>
    </div>
  )
}

