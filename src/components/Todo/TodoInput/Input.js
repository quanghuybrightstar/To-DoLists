import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob } from "./action";
import "./Input.css";

function Input() {
    const [state, dispatch] = useReducer(reducer, initState);
    
    const { job, jobs } = state;

  const jobRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    jobRef.current.focus();
  }

  return (
    <div className="todo__input">
      <h3 className="todo__heading">Todo Input</h3>
      <div className="input__content">
        <div className="input__main">
          <i class="fa-solid fa-book input__icon"></i>
          <input
            className="input__new"
            type="text"
            ref={jobRef}
            value={job}
            placeholder="Enter New Todo "
            onChange={(e) => {
              dispatch(setJob(e.target.value));
            }}
          />
        </div>
        <button 
            onClick={handleSubmit}
            className="input__btn"
            >
            Add new task
        </button>
      </div>
    </div>
  );
}

export default Input;
