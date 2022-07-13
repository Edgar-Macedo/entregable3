import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ResidentInfo = ({residents}) => {
    const [residentInfo, setResidentInfo] = useState({})

    useEffect(() => {
        axios.get(residents)
            .then((res) => setResidentInfo(res.data))
    },[])

    console.log(residentInfo)

    const status = (status) =>{
        if (status == "unknown" ) 
            {return <i className="fa-solid fa-circle" style={{color:"gray"}}></i> }
            
        else if (status === "Alive") 
            { return <i className="fa-solid fa-circle" style={{color:"green"}}></i> }
        
        else 
            { return <i className="fa-solid fa-circle" style={{color:"red"}}></i>}
        
    }

    return (
        <div className='resident-card'>
            <img src={residentInfo.image} alt="Character" className='character-pic' />
            <div className="info-container">
                <h3>{residentInfo.name}</h3>
                <p> {status(residentInfo.status)} {residentInfo.status}</p>
                <p>Origin: {residentInfo.origin?.name}</p>
                <p>Featured Episodes: {residentInfo.episode?.length}</p>
            </div>
        </div>
    );
};

export default ResidentInfo;