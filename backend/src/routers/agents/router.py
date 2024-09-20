from fastapi import APIRouter
from fastapi.exceptions import HTTPException
from .dto.get_agent_response import GetAgentResponseDTO
from ...utils.gemini import query_document_through_gemini

router = APIRouter()


@router.post("/chat")
async def get_agent_response(user_text: GetAgentResponseDTO):
    try:
        gemini_response = query_document_through_gemini(user_text)

        return {
            "data": gemini_response.text,
        }
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))
