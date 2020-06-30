import React from 'react'

export default function Categories({ items }) {
    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {
                    items.map((e, i) =>
                        <li
                            key={`${e}_${i}`}
                        >
                            {e}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
