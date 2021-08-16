import React, { useState, useEffect } from 'react';
import Company from './Company';
import './Company.css'
import "./CompanyContainer.css"

const BASE_URL = "http://127.0.0.1:9393/companies"

export default function CompanyContainer() {

    const [companies, setCompanies] = useState(null)

    useEffect(() => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(json =>setCompanies(json))
    }, [])
        
    function populateCompanies() {
        return companies.map(company => <Company company={company} updateCompany={updateCompany} deleteCompany={deleteCompany} key={company.id}/>)
    }

    function deleteCompany(company) {
        fetch(BASE_URL + "/" + company.id, {
            method: "DELETE"
        })

        const newCompanies = companies.filter(c => c.id !== company.id)
        setCompanies(newCompanies)
    }

    function updateCompany(company) {
        fetch(BASE_URL + "/" + company.id, {
            method: "PATCH",
            body: JSON.stringify(company),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        });

        const newCompanies = companies.map((c) => {
            if (c.id === company.id) {
                c = company;
            }
            return c; 
        });
        setCompanies(newCompanies);
    }
    return (
        <div>
          <div className="Company-container" > {companies && populateCompanies()}</div>
        </div>
    )
}