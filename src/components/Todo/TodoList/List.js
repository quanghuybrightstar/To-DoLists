function List() {
    return (
        <div className="todo__list">
            <h3 className="input__heading">Todo Input</h3>
            <div className="list__content">
                <div className="category">
                    <ul className="category__list">
                        <li className="category__item">
                            <button>
                                All
                            </button>
                        </li>
                        <li className="category__item">
                            <button>
                                Active
                            </button>
                        </li>
                        <li className="category__item">
                            <button>
                                Done
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default List;