import React, { useEffect } from 'react'

function AddCard({ setData }) {
    document.title = "Add Profile Card";

    //just check if data is there, or add placeholdr
    localStorage.getItem('profileCardData') ? null : localStorage.setItem('profileCardData', JSON.stringify([
        {
            name: 'Khush',
            role: 'Frontend Developer',
            imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
            linkedinUrl: 'https://Linkedin/in/khushpatel00',
            githubUrl: 'https://github/com/khushpatel00',
            discription: 'A developer who loves making animations',
        },
        {
            name: 'Placeholder',
            role: 'Game Developer',
            imageUrl: 'https://picsum.photos/seed/picsum/536/354',
            linkedinUrl: 'https://Linkedin/in/khushpatel00',
            githubUrl: 'https://github/com/khushpatel00'
        },
    ]));
    // setData(JSON.parse(localStorage.getItem('profileCardData'))); 
    useEffect(() => {
        document.querySelector('form').addEventListener('submit', function (e) {
            e.preventDefault();
            console.log(e.target);
            const name = e.target[0].value;
            const role = e.target[1].value;
            const imageUrl = e.target[2].value;
            const linkedinUrl = e.target[3].value;
            const githubUrl = e.target[4].value;
            const discription = e.target[5].value;
            let object = {
                name,
                role,
                imageUrl,
                linkedinUrl,
                githubUrl,
                discription
            };
            if (object.name == '' || object.role == '') {
                return;
                // due to strictmode, data arrives 2 time, creating empty cards
            }



            let profileCardObject = localStorage.getItem('profileCardData') ? JSON.parse(localStorage.getItem('profileCardData')) : [];
            profileCardObject.push(object)
            localStorage.setItem('profileCardData', JSON.stringify(profileCardObject));
            setData(profileCardObject);
            e.target.reset();
        });
        //fallback to update data on mount, do not touch, {maind maind fix kairu che}
        setData(localStorage.getItem('profileCardData') ? JSON.parse(localStorage.getItem('profileCardData')) : []);
    }, []);

    return (
        <>
            <form action="">
                <div className="add-card-container">
                    <input type="text" placeholder='Name' className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' required />
                    <input type="text" placeholder='Role' className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' required />
                    <input type="text" placeholder='Image URL' className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' required />
                    <input type="text" placeholder='LinkedIn URL' className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' required />
                    <input type="text" placeholder='GitHub URL' className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' required />
                    <input type="text" placeholder='Discription (optional)' className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' />

                    <button type='submit' className='submit-btn border px-5 py-2 rounded text-center mx-auto relative left-1/2 -translate-x-1/2 duration-200 hover:border-transparent cursor-pointer hover:bg-emerald-300'>Add Card</button>
                </div>
            </form>
        </>
    )
}

export default AddCard