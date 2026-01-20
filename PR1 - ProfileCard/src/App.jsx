import React, { useState } from 'react'
import AddCard from './assets/Components/AddCard.jsx'
import PlaceholderContent from './assets/Components/PlaceholderContent.jsx'
import ProfileCard from './assets/Components/ProfileCard.jsx'

function App() {

  // let data = localStorage.getItem('profileCardData') ? JSON.parse(localStorage.getItem('profileCardData')) : [];
  let localStorageData = localStorage.getItem('profileCardData') ? JSON.parse(localStorage.getItem('profileCardData')) : [];
  const [data, setData] = useState(localStorageData);
  console.log(data);

  return (
    <div className=''>
      <div className="placeholderContentContainer overflow-hidden">
        <PlaceholderContent />
      </div>
      <h1 className='mt-5 font-light text-center text-5xl'>Profile Cards</h1>
      <div className="profile-cards mt-5">
        <AddCard setData={setData} />
      </div>


      <div className='flex relative justify-center mt-10 gap-10 showData'>
        {data?.map((item, index) => (
          <ProfileCard key={index} name={item.name} role={item.role} imageUrl={item.imageUrl} linkedinUrl={item.linkedinUrl} githubUrl={item.githubUrl} />
        ))}
        <div className="absolute top-0 right-0 sm:right-0 md:right-0 lg:right-0 xl:right-1/6 2xl:right-1/5  -translate-1/2">
          <img className='w-32 h-32 rotate-45 translate-y-1/4' src="/arrow (1).png" alt="" srcSet="" />
          <p className='relative -translate-y-full translate-x-1/5 -rotate-3'>Hover Here</p>
        </div>
      {console.log(data)}

      </div>
    </div>
  )
}

export default App