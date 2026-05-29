from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

import shutil

from ..services.resume_parser import extract_pdf_text

router = APIRouter()

@router.post("/upload-resume")
async def upload_resume(
    file: UploadFile = File(...)
):

    file_path = f"uploads/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    extracted_text = extract_pdf_text(
        file_path
    )

    return {
        "filename": file.filename,
        "text": extracted_text[:1000]
    }