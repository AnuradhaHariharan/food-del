import React, { useContext, useState, useEffect } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category, searchQuery }) => {
  const [currentCategory, setCategory] = useState("dishes");

  useEffect(() => {
    setCategory(category);
  }, [category]);

  const { food_list } = useContext(StoreContext);

  // Filter food list based on both category and search query
  let filteredFoods = food_list.filter((item) => {
    const matchesCategory = currentCategory === "All" || item.category === currentCategory;
    const matchesSearchQuery = searchQuery
      ? item.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearchQuery;
  });

  // If no foods match the search query, display all foods for the current category
  if (filteredFoods.length === 0 && searchQuery) {
    filteredFoods = food_list.filter((item) => {
      return currentCategory === "All" || item.category === currentCategory;
    });
  }

  return (
    <div className='food-display' id='food-display'>
      <h2>{`Top ${currentCategory === 'All' ? 'Dishes' : currentCategory} near you`}</h2>
      <div className="food-display-list">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;


