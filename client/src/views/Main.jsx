import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from "@reach/router"


const Main = (props) => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/")
            .then( res => {
                console.log(res);
                setPets(res.data);
            })
            .catch( err => console.log(err))
    }, []);

    return (
        <>
        <h3> These pets are looking for a good home</h3>
        <Link to="/" >Back To Home</Link>
        <table className=" table table-hover col-6 mx-auto">
            <thead>
                <tr>
                    <th>Dog</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    pets.map((pet, i) => 
                    <tr key={i}>
                        <td>
                            <p>{pet.name}</p>
                        </td>
                        <td>
                            <p>{pet.type}</p>
                        </td>
                        <td>
                            <Link to={`/details/${pet._id}`}>Details</Link> | 
                            <Link classsName="btn btn-primary" to={`/edit/${pet._id}`} > Edit</Link>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </>
    );
};



export default Main;