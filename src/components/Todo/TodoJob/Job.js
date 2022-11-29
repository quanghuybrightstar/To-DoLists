import classNames from 'classnames/bind';
import { memo } from 'react';
import style from './Job.module.scss'

const cx = classNames.bind(style);

function Job({jobs, handleDelete, handleEdit, handleDoneJob}) {

    return ( 
    jobs.map(job => {
        return (
            <li
                key={job.id}
                className = {cx('list__item')}
                draggable
            >
                <div className={cx('item__name')}>
                    <h6 className= {cx(`${job.completed ? 'item__name--done' : 'item__name--active'}`)}>
                        {job.title}
                    </h6>
                </div>
                <div className={cx('item__icon')}>
                    <span 
                        className = {cx(`${job.completed ? 'text--success' : 'text--secondary'}`)}
                        onClick = {() => {
                            handleDoneJob(job.id)
                        }}
                    >
                        <i className={cx(`${job.completed ? 'far fa-check-square' : 'far fa-square'}`)} />
                    </span>

                    <span
                        className={cx('item__icon-edit')}
                        onClick={() => handleEdit(job.id)}
                    >
                        <i className='fas fa-pen'/>
                    </span>

                    <span
                        className={cx('item__icon-delete')}
                        onClick={() => handleDelete(job.id)}
                    >
                        <i className='fas fa-trash'/>
                    </span>
                </div>
            </li>
        )
   })
   )

}


export default memo(Job);