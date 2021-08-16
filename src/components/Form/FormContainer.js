import React from 'react';
import CompanyForm from './CompanyForm';
import './Form.css'

const BASE_URL = "http://127.0.0.1:9393/companies"

function FormContainer() {

    function addCompany(company) {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(company)
        }
            fetch(BASE_URL, config)
            .then(r => r.json())
    }
        return (
            <div className="Form-container">
                <CompanyForm addCompany={addCompany}/>
            </div>
            
        );
}

export default FormContainer;