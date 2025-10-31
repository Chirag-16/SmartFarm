from pydantic import BaseModel
from typing import Optional
from enum import Enum

class UserType(str, Enum):
    admin = "admin"
    user = "user"
    farmer = "farmer"

class UserBase(BaseModel):
    email: str
    contact_number: str
    first_name: str
    last_name: str
    user_type: UserType

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class User(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str
    user: User

class TokenData(BaseModel):
    email: str

class ContactUsCreate(BaseModel):
    name: str
    email: str
    phone_number: str
    farm_size: Optional[str] = None
    primary_waste_type: Optional[str] = None
    message: str

    class Config:
        orm_mode = True

class ForgotPasswordRequest(BaseModel):
    email: str

class OTPVerifyRequest(BaseModel):
    email: str
    otp: str

class ResetPasswordRequest(BaseModel):
    email: str
    new_password: str