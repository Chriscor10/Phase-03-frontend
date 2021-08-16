import React, { useState } from 'react';
import './Form.css'

function CompanyForm ({addCompany}){
    const [formState, setFormState] = useState({
        name: "",
        phone: "",
        address: "",
        rating: "",
    })

    function handleNewCompany (event) {
        const userInput = event.target.value;
        const fieldName = event.target.name;
        setFormState({
            ...formState,
            [fieldName]: userInput
        })
    }

        function handleSubmit(event) {
            event.preventDefault();
            addCompany(formState)
            }

            return (
                <div className="company-form">
                    <h1 className="company-form-heading">Work with us!</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input 
                            name="name" 
                            type="text" 
                            value={formState.name} 
                            onChange={handleNewCompany}
                            />
                        </label>
                        <label>
                            Phone:
                            <input 
                            name="phone" 
                            type="text" 
                            value={formState.phone} 
                            onChange={handleNewCompany}
                            />
                        </label>
                        <label>
                            Address:
                            <input 
                            name="address" 
                            type="text" 
                            value={formState.adress}
                            onChange={handleNewCompany}
                            />
                        </label>
                        <label>
                            Rating:
                            <input 
                            name="rating" 
                            type="integer" 
                            value={formState.rating} 
                            onChange={handleNewCompany}
                            />
                        </label>
                        <button type="submit">Get Customers</button>
                    </form>
        
                </div>
            )

}

export default CompanyForm;