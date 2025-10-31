FROM python:3.13-slim

WORKDIR /app

# Copy requirements first
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application
COPY . .

# Create directory for SQLite database
RUN mkdir -p /data

# Set database URL to use the volume
ENV DATABASE_URL=sqlite:////data/sql_app.db

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"] 