import classNames from "classnames/bind";
import { memo } from "react";

import style from './Input.module.scss'

const cx = classNames.bind(style)

function Input({jobRef, jobTitle, handleChange, handleSubmit, editJob}) {
  return (
    <div className = {cx('todo__input')}>
      <h3 className= {cx('todo__heading')}>Todo Input</h3>
      <form onSubmit={handleSubmit} className ={cx('input__content')}>
        <div className = {cx('input__main')}>
            <div className= {cx('input__icon')}>
              <i className = "fa-solid fa-book"></i>
            </div>
            <input
              ref = {jobRef}
              className = {cx('input__new')}
              type = "text"
              placeholder = "Enter new job"
              value = {jobTitle}
              onChange = {handleChange}
            />
        </div>
        <button 
              type="submit"
              className = {cx(`input__btn`)}
              >
              {editJob ? 'Edit Job' : 'Add new Job'}
        </button>
      </form>
    </div>
  );
}

export default memo(Input);
