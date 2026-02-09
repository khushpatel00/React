function App() {

  function validateForm(name, email, age, rating){
    console.log(name, email, age, rating);
  }

  function submitForm(e){
    e.preventDefault()
    // console.log(e)
    // console.log(e.target.name, e.target.age, e.target.email)

    validateForm(e.target.name, e.target.email, e.target.age, e.target.rating)
  }


  return (
    <>
      <h1 className="text-5xl m-10">Review Form</h1>

      <div className='absolute top-1/2 left-1/2 -translate-1/2'>
        <form action="" className='flex flex-col gap-1' onSubmit={submitForm}>
          <div className='flex items-center justify-center text-2xl'>
            <label htmlFor="name">Name: </label>
            <input className='bg-zinc-700 rounded m-1 ' type="text" name="name" id="name" />
          </div>
          <div className='flex items-center justify-center text-2xl'>
            <label htmlFor="email">Email: </label>
            <input className='bg-zinc-700 rounded m-1 ' type="email" name="email" id="email" />
          </div>
          <div className='flex items-center justify-center text-2xl'>
            <label htmlFor="age">Age: </label>
            <input className='bg-zinc-700 rounded m-1 ' type="number" min='0' max='100' name="age" id="age" />
          </div>
          <div className='flex items-center justify-center text-2xl'>
            <label htmlFor="rating">Rating: </label>
            <select className='bg-zinc-700 rounded px-3 text-xl' name="rating" id="rating">
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
      </div>
    </>

  )
}

export default App