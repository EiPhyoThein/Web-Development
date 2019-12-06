clear
python3 -V
set FLASK_APP=version2/app.py
export FLASK_DEBUG=True
set FLASK_ENV="development"
source env/bin/activate
flask run
