import React, { useRef, useState } from 'react'
import AddCard from './assets/Components/AddCard.jsx'
import EditCard from './assets/Components/EditCard.jsx'
import PlaceholderContent from './assets/Components/PlaceholderContent.jsx'
import ProfileCard from './assets/Components/ProfileCard.jsx'
import { useEffect } from 'react';


function App() {
  const [isEdit, setIsEdit] = useState(false)
  const [data, setData] = useState(JSON.parse(sessionStorage.getItem('employeeCardData')));
  const [editData, setEditData] = useState({});
  const titleRef = useRef(null);
  const editEmployee = (index) => {
    setEditData({
      ...data[index],
      index: index,
    })
    setIsEdit(true);
  }
  const deleteEmployee = (index) => {
    let tempData = [...data]
    tempData.splice(index, 1)
    setData(tempData)
  }

  useEffect(() => {
    if (!sessionStorage.getItem('employeeCardData') || sessionStorage.getItem('employeeCardData') == '[]' || sessionStorage.getItem('employeeCardData') == 'null') {// if session is empty
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
          imageUrl: 'https://picsum.photos/500/500',
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
    console.log(data)
  }, [data])


  // let sessionStorageData = sessionStorage.getItem('employeeCardData') ? JSON.parse(sessionStorage.getItem('employeeCardData')) : [];

  return (
    <div className=''>
      <h1 className='mt-5 font-light text-center text-5xl' ref={titleRef}>{isEdit ? 'Edit Employee Card' : 'Employee Card'}</h1>
      <div className="profile-cards mt-5">
        {isEdit ? <EditCard data={data} setData={setData} editData={editData} setIsEdit={setIsEdit} /> :
          <AddCard setData={setData} />
        }

      </div>


      <div className='flex relative flex-wrap max-w-8/12 mx-auto justify-center mt-10 gap-10 showData'>
        {data?.map((item, index) => (
          <ProfileCard
            key={index}
            name={item.name}
            role={item.role}
            imageUrl={item.imageUrl}
            linkedinUrl={item.linkedinUrl}
            githubUrl={item.githubUrl}
            discription={item.discription}
            mail={item.mail}
            action={{ editEmployee, deleteEmployee }}
            index={index}
          />
        ))}

      </div>
    </div>
  )
}

export default App