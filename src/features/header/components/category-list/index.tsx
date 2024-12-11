import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '@/redux/mealsSlice';
import { fetchCategories } from '@/redux/gateways';

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        console.error('Fail fetching data:', err);
      }
    })();
  }, []);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    dispatch(setSelectedCategory(selectedCategory));
  };

  return (
    <div>
      <select onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryList;
