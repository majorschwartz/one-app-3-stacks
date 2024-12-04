from database.database import Message

def find_messages():
    messages = Message.query.order_by(Message.timestamp.desc()).limit(100).all()
    return [message.to_dict() for message in messages]