import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import FavoriteList from './components/FavoriteList';
import TutorCard from './components/TutorCard';
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  const [tutors, setTutors] = useState([]);
  const [favoriteTutors, setFavoriteTutors] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    fetchTutors();
  }, []);

  const fetchTutors = async () => {
    try {
      const response = await axios.get(
        "https://x4g0ddpp1f.execute-api.us-east-2.amazonaws.com/prod/show/tutors"
      );
      const apiTutors = response.data.body.map((tutor) => ({
        id: tutor.tutor_id,
        name: `${tutor.first_name} ${tutor.last_name}`,
        subject: tutor.subject,
        grade: tutor.grade,
        isFavorite: false,
      }));
      setTutors(apiTutors);
    } catch (error) {
      console.error("Error fetching tutors:", error);
    }
  };

  const handleFavorite = (tutorId) => {
    const updatedTutors = tutors.map((tutor) => {
      if (tutor.id === tutorId) {
        tutor.isFavorite = !tutor.isFavorite;
        return tutor;
      }
      return tutor;
    });
    setTutors(updatedTutors);

    const updatedFavorites = updatedTutors.filter((tutor) => tutor.isFavorite);
    setFavoriteTutors(updatedFavorites);
  };

  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="App">
      <NavBar toggleShowFavorites={toggleShowFavorites} />
      <div className="tutors-container">
        {!showFavorites &&
          tutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} handleFavorite={handleFavorite} />
          ))}
      </div>
      {showFavorites && (
        <FavoriteList favoriteTutors={favoriteTutors} handleFavorite={handleFavorite} />
      )}
      <Footer />
    </div>
  );
};

export default App;

