from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Attraction(Base):
    __tablename__ = "attractions"
    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=False)
    description = Column(Text)
    category = Column(String(100))
    image_url = Column(String(500))
    created_at = Column(DateTime, default=datetime.utcnow)
