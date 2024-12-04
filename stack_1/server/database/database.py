from motor.motor_asyncio import AsyncIOMotorClient
from config import (
    MONGO_URI_LOCAL,
    MONGO_DB_LOCAL,
)

client = AsyncIOMotorClient(MONGO_URI_LOCAL)
database = client[MONGO_DB_LOCAL]

messages_collection = database["messages"]
