SELECT AVG(duration) FROM flights;
SELECT MIN(duration) FROM flights;
SELECT COUNT(*) FROM flights;
SELECT origin, COUNT(*) FROM flights GROUP BY origin;
SELECT origin, COUNT(*) FROM flights GROUP BY origin HAVING COUNT(*)>1;

