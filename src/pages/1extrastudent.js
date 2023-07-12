import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import './studentSubmission.css';

export default function Projects() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [showIcon, setShowIcon] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [titleError, setTitleError] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= 100) {
      setTitle(newTitle);
      setStatusMessage('');
      setTitleError(false); // Reset the error status
    } else {
      setTitleError(true); // Set the error status to true
      setStatusMessage('You can only enter 20 characters');
    }
  };

  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (title.length >= 1) {
      setShowForm(false);
    }
  };

  return (
    <div>
      <Header />
      {!showForm && (
        <h1 className="text-center project-title-text custom-color">
          {title}
        </h1>
      )}
      {showForm && (
        <form className="project-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="project-title"
            value={title}
            onChange={handleTitleChange}
            className="form-input"
            placeholder="Enter Project Title Here"
          />
          <button
            type="submit"
            className="btn form-submit-button"
            style={{ backgroundColor: '#68a7ca' }}
          >
            Save Changes
          </button>
          {titleError && <p className="text-danger">You can only enter 20 characters</p>}
        </form>
      )}

      <div className="container d-flex flex-column min-vh-100">
        <div className="row flex-grow-1">
          <div className="col-md-4" style={{ marginTop: '150px' }}>
            <div
              className="card"
              style={{ width: '300px', height: image ? 'auto' : '300px' }}
            >
              {image && (
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={image} className="card-img-top" alt="Card Image" style={{ width: '100%' }} />
                  {showIcon && (
                    <div className="image-remove-icon" onClick={handleImageRemove}>
                      <FontAwesomeIcon icon={faImage} size="x" color="#fff" />
                    </div>
                  )}
                </div>
              )}
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                {!image && (
                  <>
                    
                    <p className="card-text mb-2">Click to Upload Image</p>
                    <div className="d-flex justify-content-center">
                      <input
                        type="file"
                        accept="image/*"
                        className="d-none"
                        onChange={handleImageUpload}
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="btn btn-primary">
                        <FontAwesomeIcon icon={faImage} /> Choose Image
                      </label>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
