from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Doctor

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///doctors.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app, origins=["http://localhost:3000"])
db.init_app(app)

with app.app_context():
    db.create_all()




@app.route('/api/doctors/add', methods=['POST'])
def add_doctor():

    data = request.get_json()
    doctor = Doctor(
        name = data['name'],
        gender = data['gender'],
        fee = data['fee'],
        experience = data['experience'],
        age = data['age'],
        specialization = data['specialization'],
        language = data['language']
    )
    db.session.add(doctor)
    db.session.commit()
    return jsonify({'message': 'Doctor added successfully'}), 201

@app.route('/api/doctors', methods=['GET'])
def list_doctor():
    query = Doctor.query
    print(query)
    gender = request.args.get('gender')
    min_fee = request.args.get('min_fee', type=float)
    max_fee = request.args.get('max_fee',type=float)
    age = request.args.get('age', type=int)
    min_experience = request.args.get('min_experience', type=int)
    max_experience = request.args.get('max_experience', type=int)
    language = request.args.get('language')
    specialization = request.args.get('specialization')
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)

    if gender:
        query = query.filter_by(gender=gender)
    if age:
        query = query.filter_by(age=age)
    if min_fee:
        query = query.filter(Doctor.fee >= min_fee)
    if max_fee:
        query = query.filter(Doctor.fee <= max_fee)
    if min_experience:
        query = query.filter(Doctor.experience >= min_experience)
    if max_experience:
        query = query.filter(Doctor.experience <= max_experience)
    if language:
        query = query.filter(Doctor.language.ilike(f'%{language}%'))
    if specialization:
        query = query.filter(Doctor.specialization == specialization)

    paginated_query = query.paginate(page=page, per_page=per_page, error_out=False)
    doctors = [{
        'id': doctor.id,
        'name': doctor.name,
        'gender': doctor.gender,
        'fee': doctor.fee,
        'experience': doctor.experience,
        'age': doctor.age,
        'specialization': doctor.specialization,
        'language': doctor.language
    } for doctor in paginated_query.items]
    return jsonify({
        'doctors': doctors,
        'total': paginated_query.total,
        'page': paginated_query.page,
        'per_page': paginated_query.per_page
    }), 200

if __name__ == '__main__':
    app.run(debug=True)


