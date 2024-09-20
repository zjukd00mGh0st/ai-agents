from pydantic import BaseModel, validator


class GetAgentResponseDTO(BaseModel):
    user_text: str

    @validator("user_text")
    def validate_user_text(cls, value):
        user_text_len = len(value)
        if user_text_len < 1:
            raise ValueError("User text must have at least one character")
        elif user_text_len > 500:
            raise ValueError("User text must have at maximum 500 characters")

        return value
