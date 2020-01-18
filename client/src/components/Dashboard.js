import React from 'react';
import Dictation from './Dictation';

const Dashboard = props => {

    return (
        <div className="text-center">
            <h2><i className="fas fa-scroll" />Dictation</h2>
            <Dictation />
        </div>
    );
};

export default Dashboard;