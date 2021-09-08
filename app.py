from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/index.html")
def movies():
    return render_template("index.html")

@app.route("/tvshow.html")
def tvshow():
    return render_template("tvshow.html")

if __name__=="__main__":
    app.run(debug=True)