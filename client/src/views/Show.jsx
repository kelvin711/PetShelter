import React, { useState, useEffect } from 'react';
import axios from "axios";
import {navigate} from '@reach/router'


const Show = (props) => {

    const [pet, setPet] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props.id}/`)
            .then( res => {
                console.log(res);
                setPet(res.data);
            })
            .catch( err => console.log(err))
    }, []);

    const adoptPet = () => {
        axios.delete(`http://localhost:8000/api/pet/delete/${props.id}/`)
            .then(res => {
                console.log("adopted pet", res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }


    return (
        pet ? //cannot initially render the dog information because it is null
        <div className="card col-6 mx-auto">
            <button className="btn btn-success mt-3" onClick={adoptPet}>Adopt {pet.name}</button>
            <div className="card-body">

                <div className="card-title"><h1>{pet.name}</h1></div>
                <h4 className="card-subtitle text-muted">Type: {pet.type}</h4>
                <p className="card-text">Description: {pet.description}</p>
                <h5 className="card-subtitle text-muted">{pet.skill1 || pet.skill2 || pet.skill3 ? `${pet.name} Skills!` : ""}</h5>
                <p className="card-text">{pet.skill1 ? `-${pet.skill1} ` : ""}</p>
                <p className="card-text">{pet.skill2 ? `-${pet.skill2} ` : ""}</p>
                <p className="card-text">{pet.skill3 ? `-${pet.skill3} ` : ""}</p>

            </div>
        </div> : <p>Loading . . .</p>
    );
};

export default Show;

