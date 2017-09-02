# coding=utf-8
from flask import Flask
from flask import json
from flask_cors import CORS, cross_origin
from flask import request
import datetime
import time

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return '<h1>Hello World!</h1>'


@app.route('/joj')
def joj():
    return 'Joj'


@app.route('/get_time')
def get_time():
    time.sleep(5)
    return datetime.datetime.now().strftime('%H:%M:%S')


@app.route('/json')
def json_response():
    data = [{'name': 'Sasha', 'age': 26, 'height': 192}, {'name': 'Vova', 'age': 13, 'height': 156}]
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


@app.route('/books')
def get_book():
    num = int(request.args.get('num'))
    if num == 1:
        return "Дейв Крейн. Ajax в действии"
    elif num == 2:
        return "Кристиан Дари. AJAX и PHP. Разработка динамических веб-приложений"
    elif num == 3:
        return "Николас Закас. Ajax для профессионалов"
    elif num == 4:
        return "Дэниел Вулстон. Ajax и платформа .NET 2.0 для профессионалов"
    elif num == 5:
        return "Бретт Маклафлин. Изучаем Ajax"
    elif num == 6:
        return "Дино Эспозито. Знакомство с технологией Microsoft ASP.NET 2.0 AJAX"
    else:
        return "Книжка не найдена"


@app.route('/students')
def get_students():
    st = [{"name": "Kseniya", "age": 20, "sex": "F"}, {"name": "Vitaliy", "age": 18, "sex": "M"}]
    response = app.response_class(
        response=json.dumps(st),
        status=200,
        mimetype='application/json'
    )
    return response



if __name__ == '__main__':
    app.run()
