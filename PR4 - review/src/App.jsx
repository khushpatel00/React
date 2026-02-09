import { useRef, useState } from "react"

function App() {
  const nameErrRef = useRef(null)
  const emailErrRef = useRef(null)
  const ageErrRef = useRef(null)
  const [data, setData] = useState([
    {
      name: 'person',
      email: 'person@text.tst',
      age: 50,
      rating: 3
    }
  ])
  function validateForm(name, email, age, rating) {
    if (name) {
      if (name.length < 3) {
        nameErrRef.current.innerHTML = 'Name should be at least 3 characters long'
      } else if (name.length > 20) nameErrRef.current.innerHTML = 'Name should be at most 20 characters long'
      else nameErrRef.current.innerHTML = ''
    }
    else nameErrRef.current.innerHTML = 'Name shouldnt be empty'


    if (!email) emailErrRef.current.innerHTML = 'email shouldnt be empty'
    else emailErrRef.current.innerHTML = ''

    if (age) {
      if (age < 3) {
        ageErrRef.current.innerHTML = 'age shouldnt be less than 3'
      } else if (age.length > 100) ageErrRef.current.innerHTML = 'age shouldnt be more than 100'
      else ageErrRef.current.innerHTML = ''
    }
    else ageErrRef.current.innerHTML = 'age shouldnt be empty'

    if (nameErrRef.current.innerHTML == '' && emailErrRef.current.innerHTML == '' && ageErrRef.current.innerHTML == '') addData(name, email, age, rating)
  }

  function addData(name, age, email, rating) {
    console.log('adding data')
    setData([
      ...data,
      {
        name,
        email,
        age,
        rating
      }
    ])
    console.log(data)
  }

  function deleteReview(index) {
    // let tempData = data
    // tempData.splice(index, 1)
    // console.log(tempData)
    // setData(tempData)
    setData(prev => prev.filter((e, i) => i != index))
  }
  function editReview(index) {

  }

  function submitForm(e) {
    e.preventDefault()
    // console.log(e)
    // console.log(e.target.name, e.target.age, e.target.email)

    validateForm(e.target.name.value, e.target.email.value, e.target.age.value, e.target.rating.value)
  }


  return (
    <>
      <h1 className="text-5xl m-10">Review Form</h1>

      <div className='absolute top-1/2 left-1/2 -translate-1/2'>
        <form action="" className='flex flex-col gap-1' onSubmit={submitForm}>
          <div className='flex items-center justify-center text-2xl'>
            <label htmlFor="name">Name: </label>
            <input className='bg-zinc-700 rounded m-1 ' type="text" name="name" id="name" />
            <p className='text-red-500 text-nowrap ps-3' ref={nameErrRef}></p>
          </div>
          <div className='flex items-center justify-center text-2xl'>
            <label htmlFor="email">Email: </label>
            <input className='bg-zinc-700 rounded m-1 ' type="email" name="email" id="email" />
            <p className='text-red-500 text-nowrap ps-3' ref={emailErrRef}></p>
          </div>
          <div className='flex items-center justify-center text-2xl'>
            <label htmlFor="age">Age: </label>
            <input className='bg-zinc-700 rounded m-1 ' type="number" min='0' max='100' name="age" id="age" />
            <p className='text-red-500 text-nowrap ps-3' ref={ageErrRef}></p>
          </div>
          <div className='flex items-center justify-center text-2xl'>
            <label htmlFor="rating">Rating: </label>
            <select className='bg-zinc-700 rounded px-3 ms-0.5 text-xl' name="rating" id="rating">
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
          <div className='mx-auto'>
            <input type="submit" value="Submit" className='bg-zinc-700 rounded-lg text-2xl py-2 px-5 my-3' />
          </div>
        </form>

        {data.map((e, index) => {
          return (
            <div key={index} className='bg-zinc-700 p-5 rounded-xl m-1'>
              <div className='text-2xl'>Name: <span className='text-xl text-white '>{e.name}</span></div>
              {/* <div className='text-2xl'>{e.age}</div> */}
              <div className='text-2xl'>Email: <span className='text-xl text-white '>{e.email}</span></div>
              <div className='text-2xl'>Rating: <span className='text-xl text-white '>{'⭐'.repeat(e.rating)}</span></div>
              {/* <button className='bg-zinc-600 px-1 py-0.5 m-0.5 rounded-sm cursor-pointer' onClick={() => editReview(index)}>Edit</button> */}
              <button className='bg-zinc-600 px-1 py-0.5 m-0.5 rounded-sm cursor-pointer text-2xl' onClick={() => deleteReview(index)}>🗑️</button>

            </div>
          )
        })}

      </div>

    </>

  )
}

export default App