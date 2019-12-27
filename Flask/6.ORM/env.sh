clear
python3 -V
export FLASK_APP="airline2/app.py"
export FLASK_DEBUG=True
export FLASK_ENV="development"
export DATABASE_URL="postgresql://postgres:postgres@localhost/orm"

source env/bin/activate
flask run