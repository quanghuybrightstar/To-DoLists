import classNames from 'classnames/bind';
import style from './List.module.scss'
import { memo } from 'react';

const cx = classNames.bind(style);

function List({children, updateJobsToShow}) {
    return (
        <div className = {cx('todo__list')}>
            <h3 className={cx('todo__heading')}>Todo List</h3>
            <div className = {cx('list__content')}>
                <div className = {cx('category')}>
                    <div className="row">
                        <div className="col col-1-3">
                            <button  
                                className={cx('category-btn')}
                                onClick = {() => {
                                    updateJobsToShow('all');
                                }}
                                >
                                All
                            </button>
                        </div>
                        <div className="col col-1-3">
                            <button 
                                className={cx('category-btn')}
                                onClick = {() => {
                                    updateJobsToShow('active');
                                }}
                            >
                                Active
                            </button>
                        </div>
                        <div className="col col-1-3">
                            <button 
                                className={cx('category-btn')}
                                onClick = {() => {
                                    updateJobsToShow('done');
                                }}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
                {
                    children
                }
            </div>
        </div>
    )
}

export default memo(List);