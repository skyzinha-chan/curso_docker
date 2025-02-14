FROM python:3

RUN apt-get update -y && \
  apt-get install -y python3-pip python-dev-is-python3

WORKDIR /app

RUN pip3 install Flask
RUN pip3 install requests

COPY . .

EXPOSE 5000

CMD ["python", "./app.py"]