import os
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

engine=create_engine('postgresql://postgres:postgres@localhost/postgres')
db=scoped_session(sessionmaker(bind=engine))

print("ept")
def main():
    flights=db.execute("SELECT id,origin,destination,duration FROM flights").fetchall()
    for flight in flights:
        print(f"Flight {flight.id}: {flight.origin} to {flight.destination}, {flight.duration} minutes.")
    flight_id=int(input("\n Flight ID:"))
    flight=db.execute("SELECT origin,destination,duration FROM flights WHERE id=:id",{"id":flight_id}).fetchone()
    
    print(flight)
    if flight is None:
        print("Error: No such flight.")
        return 
    passengers=db.execute("SELECT name FROM passengers WHERE flight_id=:flight_id", {"flight_id":flight_id}).fetchall()
    print("\n Passengers:")
    for passenger in passengers:
        print(passenger.name)
    if len(passengers)==0:
        print("No passengers.")

if __name__=="__main__":
        main()
