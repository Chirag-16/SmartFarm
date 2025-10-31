from sqlalchemy.orm import Session
from . import models, schemas, security
import random
from datetime import datetime, timedelta

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = security.get_password_hash(user.password)
    db_user = models.User(
        email=user.email,
        hashed_password=hashed_password,
        user_type=user.user_type.value,
        contact_number=user.contact_number,
        first_name=user.first_name,
        last_name=user.last_name
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def create_contact_us(db: Session, contact: schemas.ContactUsCreate):
    db_contact = models.ContactUs(
        name=contact.name,
        email=contact.email,
        phone_number=contact.phone_number,
        farm_size=contact.farm_size,
        primary_waste_type=contact.primary_waste_type,
        message=contact.message
    )
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

def create_otp(db: Session, email: str):
    otp = str(random.randint(100000, 999999))
    print(otp)
    db_otp = models.PasswordResetOTP(email=email, otp=otp)
    db.add(db_otp)
    db.commit()
    db.refresh(db_otp)
    return otp

def verify_otp(db: Session, email: str, otp: str) -> bool:
    latest_otp = db.query(models.PasswordResetOTP).filter(
        models.PasswordResetOTP.email == email
    ).order_by(models.PasswordResetOTP.created_at.desc()).first()
    
    if latest_otp and latest_otp.otp == otp and (datetime.utcnow() - latest_otp.created_at) <= timedelta(minutes=10):
        return True
    return False

def reset_user_password(db: Session, email: str, new_password: str):
    user = db.query(models.User).filter(models.User.email == email).first()
    if user:
        hashed = security.get_password_hash(new_password)
        user.hashed_password = hashed
        db.commit()
        return True
    return False