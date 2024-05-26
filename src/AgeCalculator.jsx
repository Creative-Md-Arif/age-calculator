import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const handleDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    setAge(age);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl mb-4">Age Calculator</h1>
        <input
          type="date"
          value={birthDate}
          onChange={handleDateChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={calculateAge}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calculate Age
        </button>
        {age !== null && (
          <div className="mt-4 text-xl">
            Your age is: <span className="font-bold">{age}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AgeCalculator
