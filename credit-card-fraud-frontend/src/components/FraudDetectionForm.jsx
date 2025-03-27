import React, { useState } from 'react';

const FraudDetectionForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/fraud-detection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cardNumber, expiryDate, cvv }),
        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div>
            <h2>Credit Card Fraud Detection</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Card Number:</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Expiry Date:</label>
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>CVV:</label>
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Check Fraud</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FraudDetectionForm;