from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from src.services.prediction_service import predict_fraud

router = APIRouter()

class FraudDetectionRequest(BaseModel):
    transaction_id: str
    amount: float
    transaction_type: str
    # Add other relevant fields based on your model

class FraudDetectionResponse(BaseModel):
    transaction_id: str
    is_fraud: bool
    confidence: float

@router.post("/detect-fraud", response_model=FraudDetectionResponse)
async def detect_fraud(request: FraudDetectionRequest):
    try:
        prediction = predict_fraud(request.dict())
        return FraudDetectionResponse(
            transaction_id=request.transaction_id,
            is_fraud=prediction['is_fraud'],
            confidence=prediction['confidence']
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))