import React from "react";

const Card = ({
  index,
  onChange,
  jobTitle,
  company,
  isError,
  isSubmissionError,
}) => {
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;

    onChange(index, name, value);
  };

  return (
    <main>
      <div>
        <label>Company</label>
        <input
          type="text"
          value={company}
          name="company"
          onChange={(e) => handleInputChange(index, e)}
        />
        {isError && (
          <small style={{ color: "red" }}>Company can't be empty</small>
        )}
        {isSubmissionError && company.trim() === "" && (
          <small style={{ color: "red" }}>
            Empty Company can't be submitted
          </small>
        )}

        <label>Job Title</label>
        <input
          type="text"
          value={jobTitle}
          name="job_title"
          onChange={(e) => handleInputChange(index, e)}
        />
        {isSubmissionError && jobTitle.trim() === "" && (
          <small style={{ color: "red" }}>
            Empty Job Title can't be submitted
          </small>
        )}
      </div>
    </main>
  );
};

export default Card;
