from database.database import messages_collection
from utils.helpers import convertObjectIds

async def find_messages():
    messages = await messages_collection.find().sort("timestamp", -1).to_list(length=100)
    return await convertObjectIds(messages)
