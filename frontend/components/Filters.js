import {useState} from 'react';

const Filter = ({ onFilter }) => {
    const [gender, setGender] = useState('all');
    const [minFee, setMinFee] = useState(0);
    const [maxFee, setMaxFee] = useState(1000);
    const [minExperience, setMinExperience] = useState(0);
    const [maxExperience, setMaxExperience] = useState(100);
    const [language, setLanguage] = useState('all');
    const [specialization, setSpecialization] = useState('all');

    const handleFilter = () => {
        onFilter({ gender, min_fee: minFee, max_fee: maxFee, min_experience: minExperience, max_experience: maxExperience, language, specialization }
        );
    };
     
    return (
        <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="all">All Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input type="number" placeholder="Min Fee" value={minFee} onChange={(e) => setMinFee(e.target.value)} />
            <input type="number" placeholder="Max Fee" value={maxFee} onChange={(e) => setMaxFee(e.target.value)} />
            <input type="number" placeholder="Min Experience" value={minExperience} onChange={(e) => setMinExperience(e.target.value)} />
            <input type="number" placeholder="Max Experience" value={maxExperience} onChange={(e) => setMaxExperience(e.target.value)} />
            <input type="text" placeholder="Language" value={language} onChange={(e) => setLanguage(e.target.value)} />
            <input type="text" placeholder="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
            <button onClick={handleFilter}>Apply Filter</button>
        </div>
    );
};

export default Filter;