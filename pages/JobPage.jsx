import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const JobPage = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchJob = async () => {
        try{
            const res = await fetch(`/api/jobs/${id}`);
            const data = await res.json();
            setJob(data);
            console.log(data)
          } catch (error){
            console.log('Error fetching data', error)
          } finally {setLoading(false)}
    }
    fetchJob();
    },[])

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!job) {
        return <h2>No job found</h2>;
    }

    return (
        <div>
            <h1>{job.title}</h1>
        </div>
    );
};
export default JobPage
