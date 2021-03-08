from flask import Flask
from flask import request, jsonify
from model import get_recommendations
from serialize import serialize
from flask_cors import CORS, cross_origin

app = Flask(__name__ , static_folder = "./client/build" , static_url_path= "/")
cors = CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

##setting up the api endpoints
obj = {
    "title" : "hero",
    "titil2" : "heropanti"
}

@app.route('/api/get-recommendations/' , methods = ['GET'])
def movie_recommendations():
    return jsonify(obj)

@app.route('/api/recommend/' , methods = ['POST'])
@cross_origin()
def recommend():

    # print(request)
    obj = request.json
    print(str(obj['title']))

    ans = get_recommendations(str(obj['title']))
    ans2 = serialize(ans)

    return (jsonify(ans2))

app.run(debug = True)

