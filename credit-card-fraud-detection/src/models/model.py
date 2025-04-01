from pydantic import BaseModel
from typing import List, Optional

class Transaction(BaseModel):
    transaction_id: str
    amount: float
    currency: str
    timestamp: str
    user_id: str
    merchant_id: str
    location: str
    device_id: str
    is_fraud: Optional[bool] = None

class FraudDetectionInput(BaseModel):
    transactions: List[Transaction]

class FraudDetectionOutput(BaseModel):
    transaction_id: str
    is_fraud: bool
    fraud_score: Optional[float] = None

class FraudDetectionBatchOutput(BaseModel):
    results: List[FraudDetectionOutput]