UPDATE flights
    SET duration=430
    WHERE origin='New York'
    AND destination='London';

UPDATE flights
    SET duration=duration+15
    WHERE origin='New York'
    AND destination='London';


UPDATE flights
    SET duration=455
    WHERE origin='Lima'
    AND destination='New York';

UPDATE flights
    SET id=4
    WHERE origin='Istanbul'
    AND destination='Tokyo';
