from flask import Flask, request, jsonify
from flask_cors import CORS
from database.database import db
from database.db_find import find_messages
from database.db_insert import insert_message
import datetime
from config import ORIGIN_ENDPOINT, DATABASE_URL

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app, resources={r"/api/*": {"origins": ORIGIN_ENDPOINT}})

db.init_app(app)

# Create tables on startup
with app.app_context():
    db.create_all()

@app.route("/api/messages", methods=["GET"])
def get_messages():
    messages = find_messages()
    return jsonify(messages)

@app.route("/api/messages", methods=["POST"])
def post_message():
    message_data = request.json
    message_data["timestamp"] = datetime.datetime.now(datetime.UTC)
    message = insert_message(message_data)
    return jsonify(message.to_dict())

if __name__ == "__main__":
    app.run(debug=True)
