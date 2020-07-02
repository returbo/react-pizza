import React from 'react'


// class Categories extends React.Component {
//     state = {
//         checkedItem: null,
//     }

//     checkItem = key => {
//         this.setState({
//             checkedItem: key,
//         })
//     }

//     render() {
//         const { items } = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     <li className="active">Все</li>
//                     {
//                         items.map((e, i) =>
//                             <li
//                                 className={this.state.checkedItem === i ? 'active' : ''}
//                                 onClick={() => this.checkItem(i)}
//                                 key={`${e}_${i}`}
//                             >
//                                 {e}
//                             </li>
//                         )
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

function Categories({ items, onClick }) {
    const [ activeItem, setActiveItem ] = React.useState(null);

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
                { items &&
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