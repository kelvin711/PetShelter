import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import PetForm from '../components/PetForm';

const Edit = (props) => {

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

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props.id}/`)
            .then( res => {
                console.log(res);
                setPetForm(res.data);
            })
            .catch( err => console.log(err))
    }, []);

    const handleInputChange = ( e => {
        setPetForm({
            ...petForm,
            [e.target.name]: e.target.value
        })
    });

    const handleUpdate = e => {//making the call to our server for the update change
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${props.id}`,petForm)
        .then((res) => {
            console.log("edit city res", res);
            navigate(`/details/${props.id}`);
        })
        .catch((err) => {
        // console.log(err);
        console.log(err.response);
        setErrors(err.response?.data?.errors);
        });
    }


    return (
        <>
            <h2 className="text-center">Edit Pet</h2>
            <PetForm
                form={petForm}
                handleInputChange={handleInputChange}
                handleSubmit={handleUpdate}
                errors={errors}
                submitValue="Edit Pet"/>
        </>
    );
};


export default Edit;