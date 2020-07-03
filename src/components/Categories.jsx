import React from 'react'


function Categories({ items }) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = index => {
        setActiveItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onSelectItem(null)}
                    className={activeItem === null ? 'active' : ''}
                >Все
                </li>
                {items &&
                    items.map((e, i) =>
                        <li
                            className={activeItem === i ? 'active' : ''}
                            onClick={() => onSelectItem(i)}
                            key={`${e}_${i}`}
                        >{e}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Categories;