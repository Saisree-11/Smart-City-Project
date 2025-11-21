from flask import Blueprint, request, jsonify
from sqlalchemy.orm import sessionmaker
from models import Attraction, Base
from sqlalchemy import create_engine
import config

bp = Blueprint("api", __name__, url_prefix="/api")

engine = create_engine(config.Config.SQLALCHEMY_DATABASE_URI)
Session = sessionmaker(bind=engine)

@bp.route("/attractions", methods=["GET"])
def get_attractions():
    session = Session()
    try:
        items = session.query(Attraction).all()
        data = [{
            "id": a.id,
            "name": a.name,
            "description": a.description,
            "category": a.category,
            "image_url": a.image_url
        } for a in items]
        return jsonify({"status":"ok","data":data})
    finally:
        session.close()

@bp.route("/attractions", methods=["POST"])
def add_attraction():
    session = Session()
    payload = request.json   
    if not payload or "name" not in payload:
        return jsonify({"status":"error","message":"name required"}), 400
    a = Attraction(
        name=payload.get("name"),
        description=payload.get("description",""),
        category=payload.get("category",""),
        image_url=payload.get("image_url","")
    )
    session.add(a)
    session.commit()
    return jsonify({"status":"ok","id":a.id})
