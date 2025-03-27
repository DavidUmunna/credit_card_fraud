# Credit Card Fraud Detection API

This project is a FastAPI application designed to detect credit card fraud using machine learning models. It provides an API for users to submit transaction data and receive predictions on whether the transaction is fraudulent.

## Project Structure

```
credit-card-fraud-detection
├── src
│   ├── app.py                # Entry point of the application
│   ├── models
│   │   └── model.py          # Data models for input data
│   ├── routes
│   │   └── fraud_detection.py # API route definitions
│   ├── services
│   │   └── prediction_service.py # Logic for making predictions
│   └── utils
│       └── data_preprocessing.py # Utility functions for data preprocessing
├── requirements.txt          # Project dependencies
├── Dockerfile                 # Instructions for building Docker image
├── .env                       # Environment variable configuration
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/credit-card-fraud-detection.git
   cd credit-card-fraud-detection
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage

1. Start the FastAPI application:
   ```
   uvicorn src.app:app --reload
   ```

2. Access the API documentation at `http://127.0.0.1:8000/docs`.

## API Endpoints

- **POST /predict**
  - Description: Submit transaction data to receive a fraud prediction.
  - Request Body: JSON object containing transaction details.
  - Response: JSON object with the prediction result.

## Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables for your application.

## License

This project is licensed under the MIT License.