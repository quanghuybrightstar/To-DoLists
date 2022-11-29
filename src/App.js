import { useReducer, useRef, useEffect }from 'react';
import {v4 as uuidv4} from 'uuid'

import Header from '~/components/HeaderOnly';
import GlobalStyles from '~/components/GlobalStyles';
import {TodoInput, TodoList, TodoJob} from '~/components/Todo';
import reducer, {setJob, addJob, deleteJob, setJobs, logger} from '~/components/Reducer';



function App() {
  
  const initState = {
    job: {
      id: uuidv4(),
      title: '',
      completed: false
    },
    jobs: [],
    id: uuidv4(),
    jobsToShow: 'all',
    editJob: false
  }
  
  //dispatch -> thuật ngữ kích hoạt một action
  const [state, dispatch] = useReducer(logger(reducer), initState);
  
  const {job, jobs, id, editJob, jobsToShow} = state;

  const jobRef = useRef();
  
  const handleChange = e => {
    dispatch(setJob(e.target.value));
  }  

  const updateJobsToShow = string => {
    state.jobsToShow = string;
    let items = [];
    if(string === 'all') {
      items = jobs;
    } else if(string === 'active') {
      items = jobs.filter(job => !job.completed);
    } else if (string === 'done') {
      items = jobs.filter(job => job.completed);
    } 
    dispatch(setJobs(items));
    console.log(string);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    state.id = uuidv4();
    state.jobsToShow = 'all'
    
    const newJob = {
      id: id,
      title: job,
      completed: false
    }

    const emptyJob = {
      id: uuidv4(),
      title: '',
      completed: false
    }
    
    if(job.length > 0) {
      dispatch(addJob(newJob));
      dispatch(setJob(emptyJob));
      localStorage.setItem('job', JSON.stringify(newJob));
      state.editJob = false;
    }

    jobRef.current.focus();
    // console.log(items);
    // console.log(jobs);
    // console.log(id);
  }
  // console.log(jobs);

  const handleDoneJob = (id) => {
    const filteredJobs = jobs.map(job => {
      if(job.id === id) {
          job.completed = !job.completed
      }
      return job;
    })
    console.log(id);
    dispatch(setJobs(filteredJobs))
    // console.log(jobs);
  }

  const handleEdit = (id) => {
    const filteredJobs = jobs.filter(job => job.id !== id);
    const selectedJob = jobs.filter(job => job.id === id);

    dispatch(setJobs(filteredJobs));
    dispatch(setJob(selectedJob[0]));
    console.log(selectedJob);
    jobRef.current.focus();
    state.editJob = true;
  }

  const handleDelete = (id) => {
    const filteredJobs = jobs.filter(job => job.id !== id);
    dispatch(setJobs(filteredJobs));
  }

  const handleDeleteDoneJobs = () => {
      const filterDoneJobs = jobs.filter(job => job.completed === false);
      dispatch(setJobs(filterDoneJobs));
  }

  const handleClearList = () => { 
    dispatch(setJobs([]));
  }

  

  return (
    <GlobalStyles>
      <div className='App'>
      <Header></Header>

      <div className='container'>
        <div className="row">
          <div className="col-2-3 mboth-auto">
        <TodoInput
          jobRef = {jobRef}
          jobTitle = {job.title}
          handleChange = {handleChange}
          handleSubmit = {handleSubmit}
          editJob = {state.editJob}
        >
          
        </TodoInput>

        <TodoList
          updateJobsToShow = {updateJobsToShow}
        > 
        {
            jobs.length === 0 ? '' :
            <ul 
              className='list__group'
            >  
                {
                  <TodoJob
                  jobs={jobs}
                  handleDoneJob = {handleDoneJob}
                  handleEdit = {handleEdit}
                  handleDelete = {handleDelete}
                  />
                }

                {
                  <div className="row row__button">
                    <div className="col col-1-2">
                      <button
                        className='btn btn-delete-done'
                        onClick = {handleDeleteDoneJobs}
                      >
                        Delete Done Jobs
                      </button>
                    </div>

                    <div className="col col-1-2">
                      <button
                        className='btn btn-delete-all'
                        onClick = {handleClearList}
                      >
                        Delete All Jobs
                      </button>
                    </div>
                  </div>
                }
            </ul>
          }
        </TodoList>
          </div>
        </div>
      </div>

    </div>
    </GlobalStyles>
  );
}

export default App;
