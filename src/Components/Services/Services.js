import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='lg:grid lg:grid-cols-3 grid grid-cols-1 gap-4'>
            {
                services.map(service => <SingleService
                key = {service._id}
                service = {service}
                ></SingleService>)
            }
        </div>
    );
};

export default Services;