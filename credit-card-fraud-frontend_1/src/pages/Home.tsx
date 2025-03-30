import React from 'react';
import FraudDetectionForm from '../components/FraudDetectionForm';

const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Welcome to the Credit Card Fraud Detection Application
                </h1>
                <p className="text-gray-600 mb-6 text-center">
                    Please enter your credit card details below for fraud detection:
                </p>
                <FraudDetectionForm />
            </div>
        </div>
    );
};

export default Home;