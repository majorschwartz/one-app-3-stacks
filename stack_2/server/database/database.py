from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()

class Message(db.Model):
    __tablename__ = 'messages'
    
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now(datetime.UTC))

    def to_dict(self):
        return {
            '_id': str(self.id),
            'content': self.content,
            'timestamp': self.timestamp.isoformat()
        } 