const DoctorList = ({ doctors }) => {
    return (
    <ul>
        {doctors.map((doctor) => (
            <li key={doctor.id}>
                <h2>{doctor.name}</h2>
                <p>Gender: {doctor.gender}</p>
                <p>Age: {doctor.age}</p>
                <p>Experience: {doctor.experience}</p>
                <p>Language: {doctor.language}</p>
                <p>Specialization: {doctor.specialization}</p>
                <p>Fee: {doctor.fee}</p>
            </li>
        ))}
    </ul>
    );
};

export default DoctorList;