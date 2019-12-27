import csv, os

from flask import Flask, render_template, request
from models import *


app=Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"]=os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False
db.init_app(app)


def main():
    f=open("myanmarFlights.csv")
    reader=csv.reader(f)
    for origin,destination, duration in reader:
        db.execute("INSERT INTO flights (origin,destination,duration)VALUES(:origin,:destination,:duration)",{"origin":origin,"destination":destination,"duration":duration})
        # print(f"Added flight from {origin} to {destination} lasting {duration} minutes.")
    db.commit()

if __name__=="__main__":
    with app.app_context():
        main()