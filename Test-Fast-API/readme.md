# 🌐 FastAPI User Auth + Contact + OTP System

This project is a FastAPI-based backend that supports:

- User Signup/Login with JWT Authentication
- User Types: Admin, Collector, Farmer
- Forgot Password via OTP to Email
- Contact Us form with Email Notifications
- SQLite + SQLAlchemy ORM + Alembic Migrations

---

## 🚀 Getting Started

### ✅ 1. Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate     # For Mac/Linux
venv\Scripts\activate        # For Windows
```

---

### ✅ 2. Install Dependencies

```bash
pip install -r requirements.txt
```

---

### ✅ 3. Run Alembic Migrations

If migrations are already present:

```bash
alembic upgrade head
```

If you want to generate new ones:

```bash
alembic revision --autogenerate -m "Initial migration"
alembic upgrade head
```

---

### ✅ 4. Start the Server

```bash
uvicorn app.main:app --reload
```

Then open your browser: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 📦 Project Structure

```
app/
├── crud.py
├── database.py
├── main.py
├── models.py
├── schemas.py
├── security.py
├── utils/
│   └── email_sender.py
alembic/
test.db (auto-created)
```

---

## 🛠 Features

### ✅ Authentication
- Signup
- Login (JWT-based)
- User Roles: `admin`, `collector`, `farmer`

### ✅ Forgot Password via OTP
- Send OTP to email
- Verify OTP
- Reset password

### ✅ Contact Us API
- Stores contact form in DB
- Sends email to configured address

---

## 📮 API Docs

FastAPI provides automatic docs at:

- Swagger UI: `/docs`
- ReDoc: `/redoc`

---

## 📌 Notes

- Uses SQLite by default. For production, update `DATABASE_URL` in `.env`.
- OTPs are stored in `password_reset_otp` table with expiry.
- Avoid committing `.env` and `test.db`.

---

## 📧 Contact

For questions, feel free to reach out or open an issue.

## Setup Instructions

### 1. Database Setup (Supabase)
1. Go to https://supabase.com and sign up
2. Create a new project
3. Get your database connection string:
   - Go to Project Settings → Database
   - Find "Connection string" (URI)
   - Copy the connection string
   - Replace [YOUR-PASSWORD] with your database password

### 2. Environment Setup
Create a `.env` file in the root directory with the following configuration:

```env
# Database Configuration
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres

# Security
SECRET_KEY=your-secret-key-for-jwt

# Email Configuration
MAIL_USERNAME=your.email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_FROM=your.email@gmail.com
MAIL_PORT=587
MAIL_SERVER=smtp.gmail.com
MAIL_TLS=True
MAIL_SSL=False
```

### 3. Email Configuration Guide
To set up email functionality (for OTP and notifications):

1. Create a Gmail account or use an existing one
2. Enable 2-Step Verification:
   - Go to Google Account settings (https://myaccount.google.com/security)
   - Search for "2-Step Verification" and enable it

3. Generate an App Password:
   - Go to Google Account settings
   - Go to Security → 2-Step Verification
   - Scroll to the bottom and click on "App passwords"
   - Select "Mail" as the app and "Other" as the device
   - Copy the 16-character password provided

4. Update the `.env` file with your Gmail credentials

### 4. Running the Application
1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run database migrations:
```bash
alembic upgrade head
```

3. Start the server:
```bash
uvicorn app.main:app --reload
```

The API will be available at http://localhost:8000

## API Documentation
Access the interactive API documentation at http://localhost:8000/docs

## Features
- User Authentication
- Password Reset with OTP
- Contact Form
- Cloud Database (Supabase)
- Email Notifications

## Troubleshooting
If you encounter any issues:
1. Make sure all environment variables are set correctly
2. Check the database connection string
3. Verify Gmail App Password is correct
4. Look at the server logs for detailed error messages
