from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import crud, models, schemas, security, email_sender, cors
from .database import SessionLocal, engine

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins in development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/test/email")
async def test_email():
    """Test route to verify email configuration"""
    try:
        success = email_sender.send_otp_email(
            "test@example.com", 
            "123456"
        )
        if success:
            return {"status": "success", "message": "Test email sent successfully"}
        return {"status": "error", "message": "Failed to send test email"}
    except Exception as e:
        return {
            "status": "error",
            "message": "Email configuration error",
            "details": str(e)
        }

@app.post("/signup", response_model=schemas.User)
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.post("/login", response_model=schemas.Token)
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    print(db_user)
    if not db_user or not security.verify_password(user.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = security.create_access_token(data={"sub": db_user.email})
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": db_user
    }

@app.post("/contact-us")
def contact_us(contact: schemas.ContactUsCreate, db: Session = Depends(get_db)):
    new_contact = crud.create_contact_us(db=db, contact=contact)
    email_sender.send_contact_confirmation(to_email=contact.email, name=contact.name)
    return {"message": "Contact request submitted successfully"}

@app.post("/forgot-password/send-otp")
def send_forgot_password_otp(request: schemas.ForgotPasswordRequest, db: Session = Depends(get_db)):
    user = crud.get_user_by_email(db, request.email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    otp = crud.create_otp(db, request.email)
    if not email_sender.send_otp_email(request.email, otp):
        raise HTTPException(status_code=500, detail="Failed to send OTP email. Please try again.")

    return {"message": "OTP sent to email"}

@app.post("/forgot-password/verify-otp")
def verify_otp(request: schemas.OTPVerifyRequest, db: Session = Depends(get_db)):
    if crud.verify_otp(db, request.email, request.otp):
        return {"message": "OTP verified"}
    raise HTTPException(status_code=400, detail="Invalid or expired OTP")

@app.post("/forgot-password/reset")
def reset_password(request: schemas.ResetPasswordRequest, db: Session = Depends(get_db)):
    success = crud.reset_user_password(db, request.email, request.new_password)
    if success:
        return {"message": "Password reset successful"}
    raise HTTPException(status_code=404, detail="User not found")
