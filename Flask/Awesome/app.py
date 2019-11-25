from flask import Flask,render_template,request,redirect, url_for

app=Flask(__name__)
blog={
    'name':'My awesome blog',
    'posts':{
        1:{
            'post_id':1,
            'title':'First post',
            'content':"Hello World"
        },
        2:{
            'post_id':2,
            'title':'Another post',
            'content':"Some content"
        }
    }
}

@app.route("/")
def home():
    return render_template("home.html",blog=blog)

@app.route("/post/<int:post_id>")
def post(post_id):
    post=blog['posts'].get(post_id)
    if not post:
        return render_template('404.html',message=f'A post with id {post_id} was not found.')
    return render_template('post.html',post=post)