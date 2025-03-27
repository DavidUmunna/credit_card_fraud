from sklearn.externals import joblib
from src.utils.data_preprocessing import preprocess_input_data

model = joblib.load('path/to/your/trained/model.pkl')

def predict_fraud(input_data):
    processed_data = preprocess_input_data(input_data)
    prediction = model.predict(processed_data)
    return prediction[0]  # Return the prediction result (0 for non-fraud, 1 for fraud)