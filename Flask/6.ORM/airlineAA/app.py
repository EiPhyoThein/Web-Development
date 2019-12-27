# from sqlalchemy import create_engine
# from sqlalchemy.orm import scoped_session, sessionmaker
# engine=create_engine(os.getenv("DATABASE_URL"))
# db=scoped_session(sessionmaker(bind=engine))


# @app.route("/")
# def index():
#     flights=db.execute("SELECT * FROM flights").fetchall()
#     return render_template("index.html",flights=flights)