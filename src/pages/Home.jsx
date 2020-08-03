import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";
import { 
  Categories, 
  SortPopup, 
  PizzaBlock,
  PizzaLoadingBlock, 
} from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";

const categoryNames = [
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые'
];
const sortOptions = [
  { name: 'популярности', type: "popular", order: "desc" },
  { name: 'цене', type: "price", order: "desc"  },
  { name: 'алфавиту', type: "name", order: "asc"  }
];

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortBy = React.useCallback(type => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = obj => {
    dispatch(addPizzaToCart(obj));
  }

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          categoryNames={categoryNames}
          activeCategory={category}
        />
        <SortPopup
          sortOptions={sortOptions}
          onClickSortPopup={onSelectSortBy}
          activeSortBy={sortBy.type}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoaded ?
          items.map(pizza => 
          <PizzaBlock 
            onClickAddPizza={handleAddPizzaToCart}
            key={pizza.id}
            {...pizza}
          />)
          : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoadingBlock key={index} />)
        }
      </div>
    </div>
  )
}

export default Home;
