from flask import Flask, render_template
app=Flask(__name__)

@app.route("/")
@app.route("/<name>")
def home(name='ept'):
    members=["U Chit Thein","Daw Htay Htay","Ei Phyo Thein"]
    count=len(members)
    return render_template("index.html",content=name,r=count**2,names=members)

if __name__=="__main__":
    app.run(debug=True)