import React, { useEffect, useState } from 'react'

function EditCard({ data, setData, editData, setIsEdit }) {
    document.title = "Edit Profile Card";

    const [formData, setFormData] = useState(editData);
    const index = editData.index;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = [...data];
        updatedData[index] = formData;

        setData(updatedData);
        sessionStorage.setItem(
            "employeeCardData",
            JSON.stringify(updatedData)
        );

        console.log("Updated:", formData);
        e.target.reset();
        setIsEdit(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="add-card-container">
                <input name='name' type="text" onChange={handleChange} className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' value={formData.name} required />
                <input name='role' type="text" onChange={handleChange} className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' value={formData.role} required />
                <input name='imageUrl' type="text" onChange={handleChange} className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' value={formData.imageUrl} />
                <input name='linkedinUrl' type="text" onChange={handleChange} className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' value={formData.linkedinUrl} required />
                <input name='githubUrl' type="text" onChange={handleChange} className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' value={formData.githubUrl} required />
                <input name='discription' type="text" onChange={handleChange} className='input-field border block my-2 py-3 px-5 rounded-xl mx-auto ' value={formData.discription} />
                <input type='submit' className='submit-btn border px-5 py-2 rounded text-center mx-auto relative left-1/2 -translate-x-1/2 duration-200 hover:border-transparent cursor-pointer hover:bg-emerald-300' value='Edit Card' />
            </div>
        </form>
    );
}


export default EditCard