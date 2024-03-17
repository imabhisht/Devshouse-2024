# Use an official Python runtime as a parent image
FROM python:3.10

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install virtualenv
RUN pip install virtualenv

# Create and activate virtual environment
RUN virtualenv venv
RUN /bin/bash -c "source /app/venv/bin/activate"

# Install dependencies
RUN pip install -r requirements.txt

# Expose port 5000
EXPOSE 5000

# Run main.py when the container launches
CMD ["python", "main.py"]
