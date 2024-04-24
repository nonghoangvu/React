import { useState } from "react";

function App() {
    const [job, setJob] = useState('')
    // const [jobs, setJobs] = useState([])
    const [jobs, setJobs] = useState(() => {
        const storageJob = JSON.parse(localStorage.job)
        console.log(storageJob);
        return storageJob
    })
    const handleSubmit = () => {
        setJobs(prev => {
            const newJob = [...prev, job]
            const jsonJob = JSON.stringify(newJob)
            localStorage.setItem('job', jsonJob)
            return newJob
        })
        setJob('')
    }
    return (
        <div className="App">
            <h1>To Do List</h1>
            <input value={job} onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {jobs.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div >
    );
}

export default App;
