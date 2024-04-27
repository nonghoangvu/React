import { useForm } from 'react-hook-form'
import './App.css'
function App() {
  const jobs = [
    { id: 1, job: "Job 1" },
    { id: 2, job: "Job 2" },
    { id: 3, job: "Job 3" }
  ]
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const result = {
      title: data.title,
      fullName: data.fullName,
      age: data.age,
      gender: data.gender,
      job: jobs.find(item => item.id === Number.parseInt(data.job))
    }
    console.log(result)
  }
  return (
    <div className='container'>
      <h1 className='title'>Form Control</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='Title...'
          {...register("title")}
          onChange={(e) => {
            document.title = e.target.value
          }}
        />
        <input
          placeholder='Full name...'
          {...register("fullName", { required: true })}
        />
        {errors.fullName && <small>This field is required</small>}
        <input
          placeholder='Age...' type='number'
          {...register("age", { required: true, min: 15 })}
        />
        {errors.age && <small>This field is required and the age must be greater than 15</small>}
        <input
          type='date'
          {...register("birthDate", { required: true })}
        />
        {errors.birthDate && <small>This field is required</small>}
        <div className='container-gender'>
          <input
            name='gender'
            className='radio'
            type='radio'
            value="Male"
            id='male'
            {...register("gender", { required: true })}
          /><label htmlFor='male'>Male</label>
          <input name='gender'
            className='radio'
            type='radio'
            value="Female"
            id='female'
            {...register("gender", { required: true })}
          /><label htmlFor='female'>Female</label>
        </div>
        {errors.gender && <small>This field is required</small>}
        <select {...register("job", { required: true })}>
          <option selected disabled={true}>Job</option>
          {jobs.map((item, index) => (
            <option key={index} value={item.id}>{item.job}</option>
          ))}
        </select>
        {errors.role && <small>This field is required</small>}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;