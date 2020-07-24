import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { fetchPizzas } from "../redux/actions/pizzas";
import { 
  Categories, 
  SortPopup, 
  PizzaBlock,
  PizzaLoadingBlock, 
} from "../components";
import { setCategory } from "../redux/actions/filters";

const categoryNames = [
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые'
];
const sortItems = [
  { name: 'популярности', type: "popular" },
  { name: 'цене', type: "price" },
  { name: 'алфавиту', type: "alphabet" }
];

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          categoryNames={categoryNames}
        />
        <SortPopup
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoaded ?
          items.map(pizza => 
          <PizzaBlock 
            key={pizza.id}
            {...pizza}
          />)
          : Array(12).fill(<PizzaLoadingBlock />)
        }
      </div>
    </div>
  )
}

export default Home;
