import React from 'react';
import PropTypes from 'prop-types';


const Categories = ({
  activeCategory,
  categoryNames,
  onClickCategory
}) => {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(null)}
          className={activeCategory === null ? 'active' : ''}
        >
          Все
        </li>
        {categoryNames &&
          categoryNames.map((category, index) =>
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${category}_${index}`}
            >
              {category}
            </li>
          )
        }
      </ul>
    </div>
  )
}

Categories.propTypes = {
  categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {
  activeCategory: null,
  categoryNames: [],
}

export default React.memo(Categories);