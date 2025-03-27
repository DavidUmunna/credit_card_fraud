import React from 'react';
import FraudDetectionForm from '../components/FraudDetectionForm';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Credit Card Fraud Detection Application</h1>
            <p>Please enter your credit card details below for fraud detection:</p>
            <FraudDetectionForm />
        </div>
    );
};

export default Home;