from fastapi import APIRouter
from database.db_find import find_messages
from database.db_insert import insert_message
import datetime

router = APIRouter()


@router.get("/messages")
async def get_messages():
    messages = await find_messages()
    return messages


@router.post("/messages")
async def post_message(message: dict):
    message["timestamp"] = datetime.datetime.now(datetime.UTC).isoformat()
    result = await insert_message(message)
    message["_id"] = str(result.inserted_id)
    return message
