import React, { useState } from 'react';
import './Company.css'


export default function({company, deleteCompany, updateCompany}) {
const [newCompany, setNewCompany] = useState({...company})

function handleChange(e){
     const updatedValue = {...newCompany} ;
    updatedValue[e.target.name] = e.target.updatedValue;
    setNewCompany({...updatedValue});
}

    function handleUpdate(e) {
        e.preventDefault()
        updateCompany(newCompany)
    }

    return(
        <div className="companies">
            
        <p>{company.name}</p>
        <p>{company.phone}</p>
        <p>{company.address}</p>
        <p>{company.rating}</p>
       

        <button className="Contract-button" onClick={() => deleteCompany(company)}>Contract Me</button>

        <form onSubmit={handleUpdate}>
            <p>Name</p>
            <input name="name" value={newCompany.name} onChange={handleChange} />
            <p>Phone</p>
            <input name="phone" value={newCompany.phone} onChange={handleChange} />
            <p>Address</p>
            <input name="address" value={newCompany.address} onChange={handleChange} />
            <p>Rating</p>
            <input name="rating" value={newCompany.rating} onChange={handleChange} />
            <br></br>
            <button className="update-button" type="submit">Update</button>
        </form>

        </div>
    )
}