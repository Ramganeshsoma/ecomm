from logging import debug
from flask import Flask, render_template, request, redirect, url_for, session, flash
import requests

app = Flask(__name__)
if __name__ == "__main__":
    app.run(debug=True)

@app.route('/')
def login():
    # print(url_for('test'))
    return render_template('login.html')
    # return "hi"

@app.route('/login')
def logged_in():
    return render_template('home.html')


@app.route('/user', methods=['POST'])
def search():
    s_data=request.form["Search"]
    print(s_data)
    import requests

    url = "https://amazon-price1.p.rapidapi.com/search"

    querystring = {"marketplace":"IN","keywords":s_data}

    headers = {
        'x-rapidapi-key': "b14b9e8d80msh838de2b100c7723p1740d5jsnf6fdfa99ccf6",
        'x-rapidapi-host': "amazon-price1.p.rapidapi.com"
        }

    response = requests.request("GET", url, headers=headers, params=querystring)

    # print(response.text)
    import json

    aList = json.loads(response.text)
    print(aList[0])
    # aList=response.text[1:-1]

    return render_template('home.html', data=aList)


@app.route('/addr')
def address():
    return render_template('address.html')

@app.route('/user')
def user_profile():
    return render_template('profile.html')