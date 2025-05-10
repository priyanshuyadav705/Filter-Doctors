import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Head from 'next/head';
import Filter from '../../components/Filters';
import DoctorList from '../../components/DoctorList';

const Physician = () => {
    const [doctors, setDoctors] = useState([]);
    const [filters, setFilters] = useState({});

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/doctors',{
                params: filters
            });
            console.log('Response data:', response.data.doctors);
            setDoctors(response.data.doctors);
        }
        catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    useEffect(() => {
        console.log('Filters changed:', filters);
        fetchDoctors();
    }, [filters]);

    return(
    <>
        <Head>
             <title>General Physician - Book Consultation Online </title>
             <meta name="description" content="Find and book appointment with experienced General Physician. Fast, Affordable, and reliable consultaions through this app." 
             />
             <link
                rel = "conolical"
                href = "http://localhost:3000/specialties/general-physician-internal-medicine"
             /> 
        </Head>
        
        <div>
            <Header />
            <Filter onFilter={setFilters}/>
            <DoctorList doctors={doctors}/>
        </div>
    </>
    );
};

export default Physician;