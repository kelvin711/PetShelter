import axios from 'axios';
import React, {useState} from 'react';
import {navigate} from "@reach/router";
import PetForm from '../components/PetForm';


const Create = (props) => {

    const [petForm, setPetForm] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        type: "",
        description: ""
    });

    const handleInputChange = ( e => {
        setPetForm({
            ...petForm,
            [e.target.name]: e.target.value
        })
    });

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pet/create", petForm)
        .then( res => {
            console.log(res);
            navigate("/");
        })
        .catch( err => {
        console.log(err.response);
        setErrors(err.response?.data?.errors);
        })
    };

    return (
        <>
            <h2 className="text-center">Know a pet needing a home?</h2>
            <PetForm
                form={petForm}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="Add a Pet"/>
        </>
    );
};



export default Create;