CREATE INDEX duration_index ON flights (duration);

SELECT * FROM flights WHERE id IN
(SELECT flight_id FROM passengers GROUP BY flight_id HAVING COUNT(*)>1 );