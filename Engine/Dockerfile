# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY .env main.py codeGenerator.py engineFunctions.py requirements.txt /app/


RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 5000


# Run main.py when the container launches
CMD ["python", "main.py"]
