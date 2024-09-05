import React from 'react';
import { useParams } from 'react-router-dom';



const JobPage = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>{job.title}</h1>
        </div>
    );
};

const jobLoader = async ({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json()
    return data;

}
export {JobPage as default, jobLoader}
