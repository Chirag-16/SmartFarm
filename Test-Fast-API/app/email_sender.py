import smtplib
import os
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

# Get email configuration from environment variables
EMAIL_USERNAME = os.getenv("MAIL_USERNAME")
EMAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
EMAIL_FROM = os.getenv("MAIL_FROM")
SMTP_SERVER = os.getenv("MAIL_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("MAIL_PORT", "587"))
MAIL_TLS = os.getenv("MAIL_TLS", "True").lower() == "true"
MAIL_SSL = os.getenv("MAIL_SSL", "False").lower() == "true"

# Log configuration (without sensitive data)
logger.info(f"Email Configuration: SMTP_SERVER={SMTP_SERVER}, PORT={SMTP_PORT}, TLS={MAIL_TLS}, SSL={MAIL_SSL}")

def send_contact_confirmation(to_email: str, name: str):
    subject = "Thank you for contacting us"
    body = f"""
    Hi {name},

    Thank you for reaching out! We have received your message and will get back to you soon.

    Best regards,  
    AgriClean Team
    """

    msg = MIMEMultipart()
    msg["From"] = EMAIL_FROM
    msg["To"] = to_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        if MAIL_SSL:
            server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
        else:
            server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
            if MAIL_TLS:
                server.starttls()
        
        server.login(EMAIL_FROM, EMAIL_PASSWORD)
        server.sendmail(EMAIL_FROM, to_email, msg.as_string())
        server.quit()
        return True
    except Exception as e:
        print("Email sending failed:", e)
        return False

def send_otp_email(to_email: str, otp: str):
    logger.info(f"Attempting to send OTP email to: {to_email}")
    subject = "Your OTP for Password Reset"
    body = f"""
    Hello,

    Your OTP for password reset is: {otp}

    This OTP is valid for 10 minutes.

    If you didn't request this, please ignore this email.

    Thanks,
    AgriClean Team
    """

    msg = MIMEMultipart()
    msg["From"] = EMAIL_FROM
    msg["To"] = to_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        logger.info("Establishing SMTP connection...")
        if MAIL_SSL:
            logger.info("Using SMTP_SSL connection")
            server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
        else:
            logger.info("Using regular SMTP connection")
            server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
            if MAIL_TLS:
                logger.info("Starting TLS")
                server.starttls()
        
        logger.info(f"Attempting login with username: {EMAIL_USERNAME}")
        server.login(EMAIL_USERNAME, EMAIL_PASSWORD)
        logger.info("Login successful, sending email...")
        server.sendmail(EMAIL_FROM, to_email, msg.as_string())
        server.quit()
        logger.info("Email sent successfully!")
        return True
    except Exception as e:
        logger.error(f"Failed to send OTP email: {str(e)}")
        logger.error(f"Email configuration: SMTP_SERVER={SMTP_SERVER}, PORT={SMTP_PORT}")
        logger.error(f"Username: {EMAIL_USERNAME}, From: {EMAIL_FROM}")
        return False
