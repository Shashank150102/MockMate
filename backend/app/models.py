# app/models.py

from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import DateTime

from sqlalchemy.sql import func

from .database import Base


class Resume(Base):

    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True)

    filename = Column(String)

    content = Column(Text)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )


class JobDescription(Base):

    __tablename__ = "job_descriptions"

    id = Column(Integer, primary_key=True)

    filename = Column(String)

    content = Column(Text)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )