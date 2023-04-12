import React, { useState } from "react";






function EducationForm() {  

  // Initialize state for education details
  const [education, setEducation] = useState({
    degree: "",
    institution: "",
    year: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send education details to server or handle as needed
    console.log(education);
    // Reset form
    setEducation({ degree: "", institution: "", year: "" });
  };

  // Handle input changes and update state accordingly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (

    <form onSubmit={handleSubmit}>
      <label>
        Degree:
        <input
          type="text"
          name="degree"
          value={education.degree}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Institution:
        <input
          type="text"
          name="institution"
          value={education.institution}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Year:
        <input
          type="text"
          name="year"
          value={education.year}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}


 



export default EducationForm;



