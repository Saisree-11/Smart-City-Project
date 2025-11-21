import os

class Config:
    DB_HOST = "127.0.0.1"
    DB_PORT = "3306"
    DB_USER = "smartcity_user"
    DB_PASSWORD = "7878"
    DB_NAME = "smartcity_db"

    SQLALCHEMY_DATABASE_URI = (
        f"mysql+mysqlconnector://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
