import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  const changeValue = (action) =>{
    // if(count){
      if(action == 'increase'){
        setCount(count + 1 );
      }
      if(action == 'decrease' && count > 0){
        setCount(count - 1);
      } 
    // }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-center text-7xl mb-10'>Counter</h1>
      <div className="card flex flex-col justify-center items-center">
        <p className='text-6xl monospace mb-3'>{count}</p>
        <div className='flex justify-center'>
          <button className='border border-white cursor-pointer mx-3 rounded-sm px-3 py-1' onClick={() => changeValue('increase')}>
            INC
          </button>
          <button className='border border-white cursor-pointer mx-3 rounded-sm px-3 py-1' style={{cursor: count<=0 && 'not-allowed'}} onClick={() => changeValue('decrease')}>
            DEC
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
