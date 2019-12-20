clear
python --version
export FLASK_APP="airline0/app.py"
export FLASK_DEBUG=True
export FLASK_ENV="development"
export DATABASE_URL=postgresql://postgres:postgres@localhost/postgres
source ~/Web-Development/Flask/5.SQL/env/bin/activate
flask run
# flask run --host 127.0.0.1



