SELECT * FROM flights;
SELECT origin, destination FROM flights;
SELECT * FROM flights WHERE id=3;
SELECT * FROM flights WHERE origin='New York';
SELECT * FROM flights WHERE duration>500;
SELECT * FROM flights WHERE destination='Paris' AND duration>500;
SELECT * FROM flights WHERE destination='Paris' OR duration>500;
SELECT * FROM flights WHERE origin LIKE '%a%';
SELECT * FROM flights LIMIT 2;
SELECT * FROM flights ORDER BY duration ASC;
SELECT * FROM flights ORDER BY duration DESC;


SELECT origin, destination, name FROM flights JOIN passengers ON passengers.flight_id=flights.id;
SELECT origin, destination, name FROM  flights JOIN passengers ON passengers.flight_id=flights.id WHERE name='Alice';
SELECT origin, destination, name FROM  flights LEFT JOIN passengers ON passengers.flight_id=flights.id;
