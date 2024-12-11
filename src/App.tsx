import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import fetchMeals from './redux/gateways';
import MealCard from './features/meal-card';
import Error from './features/error';
import Header from './features/header';
import MealsList from './features/mealsList';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <MealsList />
      </>
    ),
  },
  {
    path: '/meal/:id',
    element: <MealCard />,
  },
  {
    path: '*',
    element: <Error type="general" />,
  },
]);

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals(''));
  }, []);

  return (
    <div className="page">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
