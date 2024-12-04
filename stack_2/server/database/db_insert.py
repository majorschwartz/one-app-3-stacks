from database.database import db, Message

def insert_message(message_data):
    message = Message(content=message_data['content'])
    db.session.add(message)
    db.session.commit()
    return message 