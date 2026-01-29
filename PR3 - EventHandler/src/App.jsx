import { useState, useRef } from 'react'
import Button from './Components/Button'

function App() {
  const outputRef = new useRef(null)
  const [output, setOutput] = useState(0);
  return (
    <div className='bg-zinc-800 text-zinc-200 overflow-x-hidden flex flex-col gap-10 justify-center items-center h-screen w-screen text-5xl'>
      <div className='w-full flex justify-end'> 
        <div className='basis-1/3 text-end' ref={outputRef}>{output}</div>
        <div className='basis-1/3'></div> {/* for aligning the textbox with buttons*/}
      </div>
      <div className='flex'>
        <div className='flex flex-row flex-wrap-reverse '>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'CE', '='].map((item, index) => {
            return (
              <Button ref={outputRef} output={setOutput} classList={item == 0 ? 'basis-full' : typeof item == 'string' ? 'basis-1/2' :  'basis-1/3'} key={index} content={item} />
            )
          })}
        </div>
        <div className='flex flex-col'>
          {['c', '+', '-', '*', '/'].map((item, index) => {
            return (
              <Button ref={outputRef} output={setOutput} classList={'basis-1/4'} key={index} content={item} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
