import React, { useState } from 'react'
import AddCard from './assets/Components/AddCard.jsx'
import PlaceholderContent from './assets/Components/PlaceholderContent.jsx'
import ProfileCard from './assets/Components/ProfileCard.jsx'
import { useEffect } from 'react';


function App() {

  const [data, setData] = useState(JSON.parse(sessionStorage.getItem('employeeCardData')));

  const editEmployee = () => { }
  const deleteEmployee = (index) => {
    let tempData = [...data]
    tempData.splice(index, 1)
    setData(tempData)
  }

  useEffect(() => {
    if (!sessionStorage.getItem('employeeCardData') || sessionStorage.getItem('employeeCardData') == '[]' || sessionStorage.getItem('employeeCardData') == 'null') {// if session is empty
      console.log(sessionStorage.getItem('employeeCardData'))
      setData([
        {
          name: 'Khush',
          role: 'Frontend Developer',
          imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
          linkedinUrl: 'https://Linkedin/in/khushpatel00',
          githubUrl: 'https://github/com/khushpatel00',
          discription: 'A developer who loves making animations',
          mail: 'patelxkhush@gmail.com'
        },
        {
          name: 'Placeholder',
          role: 'Game Developer',
          imageUrl: 'https://picsum.photos/seed/picsum/536/354',
          linkedinUrl: 'https://Linkedin/in/khushpatel00',
          githubUrl: 'https://github/com/khushpatel00',
          mail: ''
        },
      ])
    }
    else setData(JSON.parse(sessionStorage.getItem('employeeCardData')))
  }, [])

  useEffect(() => { // update session on data change
    sessionStorage.setItem('employeeCardData', JSON.stringify(data))
  }, [data])


  // let sessionStorageData = sessionStorage.getItem('employeeCardData') ? JSON.parse(sessionStorage.getItem('employeeCardData')) : [];

  return (
    <div className=''>
      <h1 className='mt-5 font-light text-center text-5xl'>Employee Card</h1>
      <div className="profile-cards mt-5">
        <AddCard setData={setData} />
      </div>


      <div className='flex relative flex-wrap max-w-8/12 mx-auto justify-center mt-10 gap-10 showData'>
        {data?.map((item, index) => (
          <ProfileCard key={index} name={item.name} role={item.role} imageUrl={item.imageUrl} linkedinUrl={item.linkedinUrl} githubUrl={item.githubUrl} discription={item.discription} mail={item.mail} action={{ editEmployee, deleteEmployee }} index={index} />
        ))}

      </div>
    </div>
  )
}

export default App