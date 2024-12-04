from database.database import messages_collection


async def insert_message(message: dict):
    result = await messages_collection.insert_one(message)
    return result
