import React, { useEffect } from 'react'

function AddCard({ setData }) {
    document.title = "Add Profile Card";

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
            }



            let sessionCardObject = sessionStorage.getItem('employeeCardData') ? JSON.parse(sessionStorage.getItem('employeeCardData')) : [];
            sessionCardObject.push(object)
            sessionStorage.setItem('employeeCardData', JSON.stringify(sessionCardObject));
            setData(sessionCardObject);
            e.target.reset();
        });
        setData(sessionStorage.getItem('employeeCardData') ? JSON.parse(sessionStorage.getItem('employeeCardData')) : []);
    }, []);

    return (
        <>
            <form action="">
                <div className="add-card-container">
                    <input type="text" placeholder='Name' className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' required />
                    <input type="text" placeholder='Role' className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' required />
                    <input type="text" placeholder='Image URL (optional)' className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' />
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