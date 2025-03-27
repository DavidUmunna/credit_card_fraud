from fastapi import FastAPI
from routes.fraud_detection import router as fraud_detection_router

app = FastAPI()

app.include_router(fraud_detection_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Credit Card Fraud Detection API"}