from flask import Flask, send_from_directory
import config
from routes import bp
from models import Base
from sqlalchemy import create_engine

def create_app():
    app = Flask(__name__, static_folder="../frontend", static_url_path="/")
    app.config.from_object(config.Config)
    app.register_blueprint(bp)
    return app

if __name__ == "__main__":
    app = create_app()
    # create tables if not exist (development only)
    engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"])
    Base.metadata.create_all(engine)
    app.run(host="0.0.0.0", port=5000, debug=True)



