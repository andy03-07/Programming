import React from 'react';
import { useEffect,useState } from 'react';
import '../Styles/home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setRole } from '../redux/actions/authAction';
import {login, logout } from '../redux/actions/authAction';
import logoo from './../logoo.png';
import pro from '../logos/user.svg';
import plumbing from '../logos/plumb.svg';
import carpenter from '../logos/carpenter.svg';
import electric from '../logos/electric.svg';
import mason from '../logos/mason.svg'
import paint from '../logos/painting.svg'
import clean from '../logos/clean.png'
import plu from '../logos/plumbing.jpg'
import car from '../logos/carpentry.jpg'
import cle from '../logos/cle.jpg'
import ele from '../logos/electric.jpg'
import mas from '../logos/mason.jpg'
import pain from '../logos/paint.jpg'

const categories = [
  { name: "Plumbing", image: plumbing, path: "/plumbing" },
  { name: "Carpentry", image: carpenter, path: "/carpentry" },
  { name: "Electrical", image: electric, path: "/electrician" },
  { name: "Mason", image: mason, path: "/mason" },
  { name: "Painting", image: paint, path: "/painting" },
  { name: "Cleaning", image: clean, path: "/cleaning" },
];

const HomePage = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholderTexts = [
    'Search for "Plumbers"',
    'Search for "Masons"',
    'Search for "Electricians"',
    'Search for "Painters"',
    'Search for "Carpenters"',
    'Search for "Cleaners"',
  ];

  // Change the placeholder text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderTexts.length);
    }, 1500); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const carouselImages = [plu, car , ele , cle ,mas, pain]; 
  const carouselItems = [
    { image: plu, category: "Plumbing" },
    { image: car, category: "Carpentry" },
    { image: cle, category: "Cleaning" },
    { image: ele, category: "Electrical" },
    { image: mas, category: "Masonry" },
    { image: pain, category: "Painting" },
  ];
 // Add URLs of images for the carousel

  // Set up the carousel to change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);
   
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      dispatch(setRole(userData.role));
      if (userData.role === 'admin') {
        navigate('/admin');
      } else if (userData.role === 'user') {
        navigate('/home');
      }
    }
  }, [dispatch, navigate]);
  
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter categories based on the search query
    if (query.length > 0) {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log("Filtered Suggestions: ",filtered)
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSearchClick = () => {
    if (filteredSuggestions.length > 0) {
      navigate(filteredSuggestions[0].path); // Navigate to first filtered suggestion
    }
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
  };

  const handleCategoryClick = (categoryPath) => {
    navigate(categoryPath); // Navigate to the respective worker category page
  };

    const Navigate = useNavigate(); // Initialize navigate function
  
    // Function to handle login click
    const handleLoginClick = () => {
      navigate('/login'); // Navigate to the login page
    };

    const handlePlumbingClick = () => {
      navigate('/plumbing'); // Navigate to the Plumbing page
    };

    const handleCarpentryClick = () => {
      navigate('/carpentry'); // Navigate to the Plumbing page
    };

    const handleCleaningClick = () => {
      navigate('/cleaning'); // Navigate to the Plumbing page
    };

    const handleElectricianClick = () => {
      navigate('/electrician'); // Navigate to the Plumbing page
    };

    const handleMasonClick = () => {
      navigate('/mason'); // Navigate to the Plumbing page
    };

    const handlePaintingClick = () => {
      navigate('/painting'); // Navigate to the Plumbing page
    };
    
    const handleProfileClick = () => {
      navigate('/profile'); // Navigate to the Profile page
    };

    const handleCreateAccountClick = () => {
      navigate('/signup'); // Navigate to the create account page
    };

  return (
    <div>
      {/* Logo and Authentication Section */}
      <header>
        <div className="header-container">
          <div className="logo">
            <img src={logoo} alt="Worker-Finder Logo" />
          </div>
          <div className='slogan'>WELCOME TO WORKER FINDER WEB</div>
          <div className="auth-buttons">
          {isAuthenticated ? (
              <button onClick={handleProfileClick} className="btn">Profile</button>
            ) : (
              <>
                <button onClick={handleLoginClick} className="btn">Login</button>
                <button onClick={handleCreateAccountClick} className="btn">Create Account</button>
              </>
            )}
          </div>
        </div>
      </header>

      


      {/* Search Bar with Profile */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-box">
            <input type="text" id="search" placeholder={placeholderTexts[placeholderIndex]}
            value={searchQuery}
            onChange={handleSearchChange}/>
            <button className="search-btn" onClick={handleSearchClick}>Search</button>
            <div id="suggestions" className="suggestions">
            {filteredSuggestions.length > 0 && searchQuery && (
              <ul>
                {filteredSuggestions.map((category) => (
                  <li key={category.name} onClick={() => handleSuggestionClick(category.path)}>
                    <img src={category.image} alt={category.name} />
                    {category.name}
                  </li>
                ))}
              </ul>
            )}
            </div>
          </div>
          <div className="profile">
            <img src={pro} alt="User Profile" onClick={handleProfileClick}/>
          </div>
        </div>
      </section>
       
       {/* Carousel Section */}
      <div className="carousel-container">
      {/* Image Section */}
      <div className="carousel-image-container">
        <img
          src={carouselItems[currentImageIndex].image}
          alt={`Slide ${currentImageIndex + 1}`}
          className="carousel-image"
        />
      <div className="carousel-category">{carouselItems[currentImageIndex].category}</div>
      </div>

      {/* Text Content on the Right */}
      <div className="carousel-text">
        {/* <h3> {carouselItems[currentImageIndex].category}</h3> */}
        <p>Find skilled professionals for {carouselItems[currentImageIndex].category.toLowerCase()} services to meet all your needs.</p>
      

        {/* <div className="carousel-info">
          {currentImageIndex + 1} / {carouselItems.length}
        </div> */}
      </div>

      {/* Manual Controls */}
      <button className="carousel-btn prev-btn" onClick={goToPreviousImage}>
        &#10094;
      </button>
      <button className="carousel-btn next-btn" onClick={goToNextImage}>
        &#10095;
      </button>
    </div>

      {/* Work Categories Section */}
      <section className="categories-section">
  <h2>Select a Type of Worker</h2>
  <div className="worker-categories">
    <div className="category" data-type="plumbing">
      <img src={plumbing} alt="Plumbing" onClick={handlePlumbingClick} />
      <span onClick={handlePlumbingClick} className="btn">Plumbing</span>
    </div>
    <div className="category" data-type="carpentry">
      <img src={carpenter} alt="Carpentry" onClick={handleCarpentryClick} />
      <span onClick={handleCarpentryClick} className="btn">Carpentry</span>
    </div>
    <div className="category" data-type="electrical">
      <img src={electric} alt="Electrical" onClick={handleElectricianClick} />
      <span onClick={handleElectricianClick} className="btn">Electrical</span>
    </div>
    <div className="category" data-type="mason">
      <img src={mason} alt="Mason" onClick={handleMasonClick} />
      <span onClick={handleMasonClick} className="btn">Mason</span>
    </div>
    <div className="category" data-type="painting">
      <img src={paint} alt="Painting" onClick={handlePaintingClick} />
      <span onClick={handlePaintingClick} className="btn">Painting</span>
    </div>
    <div className="category" data-type="cleaning">
      <img src={clean} alt="Cleaning" onClick={handleCleaningClick} />
      <span onClick={handleCleaningClick} className="btn">Cleaning</span>
    </div>
  </div>
</section>


    

      {/* Worker Listings Section */}
      {/* <section id="worker-list" className="worker-list">
        <h2>Available Workers</h2> */}
        <div id="workers" className="worker-cards">
          {/* Dynamic Worker Cards Here */}
        </div>
        
      {/* </section> */}

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Worker-Finder India. All rights reserved.</p>
      </footer> 
    </div>
  );
};

export default HomePage;
