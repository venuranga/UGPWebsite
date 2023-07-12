import React from 'react';

function StudentSubmission() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="groupNumber" className="form-label">Group Number</label>
            <input type="text" className="form-control" id="groupNumber" required />
          </div>
          <div className="mb-3">
            <label htmlFor="registrationNumber" className="form-label">Registration Number</label>
            <input type="text" className="form-control" id="registrationNumber" required />
          </div>
          <div className="mb-3">
            <label htmlFor="projectTitle" className="form-label">Project Title</label>
            <input type="text" className="form-control" id="projectTitle" required />
          </div>
          <div className="mb-3">
            <label htmlFor="projectDescription" className="form-label">Project Description</label>
            <textarea className="form-control" id="projectDescription" rows="6" required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default StudentSubmission;
