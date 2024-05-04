import React from 'react'
import { useState } from 'react';
// import Card from './Card';

const ExperienceForm = () => {
    const [formData, setFormData] = useState({
        company: "",
        title: "",
        errors: {},
    });
  

    const handleChange = (e) => {
        const {name, value} = e.target;

    
        setFormData((formData) => {
            return {
                ...formData,
                [name]: value,
            }
        })
    }

    const validateForm = () => {
        const errors = {};

        if(!formData.company){
            errors.company = "Company ain't valid"
        }

        if(!formData.title){
            errors.title = "Title ain't valid"
        }

        setFormData((prevState) => {
            return {
                ...prevState,
                errors
            }
        })

        console.log(Object.keys(errors));
        return Object.keys(errors).length === 0;
    }



    const handleSubmit = (e) => {
        e.preventDefault();

       if(validateForm()){
            console.log(formData);
            formData.errors({})
       }else{
        alert("Error!")
       }

    }


  return (
    <main>
        <form onSubmit={handleSubmit}>
            Company: <input type="text" name="company" value={formData.company}  onChange={handleChange} />
            {formData.errors.company && (
                <p style={{color: "red"}}>{formData.errors.company}</p>
            )}
            Title: <input type="text" name="title" value={formData.title} onChange={handleChange} />
            {formData.errors.title && (
                <p style={{color: "red"}}>{formData.errors.title}</p>
            )}

            <button type="submit">Add</button>
        </form>
        {/* <Card data={formData} /> */}
    </main>
  )
}

export default ExperienceForm