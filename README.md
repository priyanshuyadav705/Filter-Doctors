<h1 align="center">Welcome to Filtering General Doctors 👋</h1>

> A Doctor Consultation Web App built using **Next.js**, **Flask**, and **SQL**. It allows users to browse and book appointments with specialized doctors (e.g., General Physicians, Cardiologists) through a clean, modern interface. The app includes various filters to help users find doctors based on their preferences, such as gender, specialization, language, and fee range. The backend is designed to handle doctor data and provides REST APIs to manage doctors' listings.

---

## Features

- Browse doctors by specialization
- Filter doctors by:
  - Gender
  - Language
  - Fee Range
  - Experience
  - Language
  - Specialisation
- Responsive frontend built with Next.js
- Backend REST APIs using Flask

---

## Installation

Clone the repository:

```bash
git clone https://github.com/priyanshuyadav705/Filter-Doctors.git


Create Virtual Environment:

```sh
cd Filter-Doctors
python3 -m venv .venv
source .venv/bin/activate
```
Install backend dependencies:

```sh
cd backend
pip install -r requirement.txt
```
Run the Flask backend:

```sh
python app.py
```

Test the API with cURL

Once app.py is running, you can use curl to add a new doctor to the database :
Open a new terminal tab:

```sh
cd Filter-Doctors
python3 -m venv .venv
source .venv/bin/activate
curl -X POST http://127.0.0.1:5000/api/doctors/add \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dr. Alice Sharma",
    "gender": "female",
    "fee": 500,
    "experience": 10,
    "age": 40,
    "specialization": "General Physician",
    "language": "English, Hindi"
  }'
Expected Response:
{
  "message": "Doctor added successfully"
}
```


2. Set up the frontend
Open a new terminal tab:

```sh
cd Filter-Doctors
python3 -m venv .venv
source .venv/bin/activate
cd frontend
npm install axios
npm install
npm run dev
```

## Usage


[Filtering](http://localhost:3000/specialties/general-physician-internal-medicine
)


## Author

👤 **Priyanshu yadav**

