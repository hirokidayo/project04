from flask import Flask, jsonify
from resources import Movies

app = Flask(__name__)

# Routes
app.add_url_rule('/movies/', view_func=Movies.as_view('movies'))
app.add_url_rule('/movies/<movie_id>', view_func=Movies.as_view('movie'))

# Root endpoint
@app.route('/')
def index():
    return jsonify(message="Welcome to the Movies API")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
