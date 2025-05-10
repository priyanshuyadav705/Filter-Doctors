from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Doctor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    fee = db.Column(db.Float, nullable=False)
    experience = db.Column(db.Integer, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    specialization = db.Column(db.String(80), nullable=False)
    language = db.Column(db.String(80), nullable=False)