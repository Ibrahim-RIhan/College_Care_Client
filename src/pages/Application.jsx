import React from 'react';
import { useParams } from 'react-router-dom';

const Application = () => {
const {id} = useParams()
console.log(id);
    return (
        <div>
            Application
        </div>
    );
};

export default Application;