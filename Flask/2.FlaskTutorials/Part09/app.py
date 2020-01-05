from flask import Flask, render_template
from blue import blue

app=Flask(__name__)
app.register_blueprint(blue,url_prefix="/admin")


@app.route("/")
@app.route("/test")
def test():
    return "<h1>This is a test.</h1>"

@app.route("/view")
def view():
    return render_template("/admin/home.html")


if __name__=="__main__":
    app.run(debug=True)