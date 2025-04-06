import React from 'react';
import axios from 'axios';
import { useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import '../Styles/home.css';
import { useNavigate } from 'react-router-dom';
import logoo from '../logos/logoo.png'
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
import flag from '../logos/india.png'
import loc from '../logos/location-crosshairs-solid.svg';
import globe from '../logos/globe-solid.svg';
import noti from '../logos/bell-solid.svg';
import search from '../logos/magnifying-glass-solid.svg';
import help from '../logos/circle-info-solid.svg'

const categories = [
  { name: "Plumbing", image: plumbing, path: "/plumber" },
  { name: "Carpentry", image: carpenter, path: "/carpenter" },
  { name: "Electrical", image: electric, path: "/electrician" },
  { name: "Mason", image: mason, path: "/mason" },
  { name: "Painting", image: paint, path: "/painter" },
  { name: "Cleaning", image: clean, path: "/cleaner" },
];

const HomePage = () => {
  const user = useSelector((state)=> state.auth.user);
  const navigate = useNavigate();

  const [locationName, setLocationName] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
                params: {
                    lat: latitude,
                    lon: longitude,
                    format: "json",
                },
            });

            const address = response.data.display_name;
            setLocationName(address);
        } catch (error) {
            console.error("Error fetching location:", error);
        }
    });
}, []);

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      alert("📩 Your message has been sent! Our team will respond soon.");
      setMessage("");
      setShowChat(false);
    }
  };

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholderTexts = [
    'Search for "Plumbers"',
    'Search for "Masons"',
    'Search for "Electricians"',
    'Search for "Painters"',
    'Search for "Carpenters"',
    'Search for "Cleaners"',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderTexts.length);
    }, 1500);
    return () => clearInterval(interval); 
  }, []);
  
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselItems = [
    { image: plu, category: "Plumbing",path: "/plumber" },
    { image: car, category: "Carpentry",path: "/carpenter" },
    { image: cle, category: "Cleaning", path: "/cleaner" },
    { image: ele, category: "Electrical",path: "/electrician" },
    { image: mas, category: "Masonry",path: "/mason" },
    { image: pain, category: "Painting" ,path: "/painter"},
  ];

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
  
 
  
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

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
      navigate(filteredSuggestions[0].path);
    }
  };

  const handleSuggestionClick = (path) => {
  user ? navigate(path) : navigate('/signup')
  };


  const handleCategoryClick = (categoryPath) => {
    user ? navigate(categoryPath) : navigate('/signup')
  };

    const handleLoginClick = () => {
      navigate('/login');
    };

    const handleCreateAccountClick = () => {
      navigate('/signup');
    };

    const handlePlumbingClick = () => {
      user ? navigate('/plumber') : navigate('/signup')
      
    };

    const handleCarpentryClick = () => {
      user ? navigate('/carpenter') : navigate('/signup')
    };

    const handleCleaningClick = () => {
      user ? navigate('/cleaner') : navigate('/signup')
    };

    const handleElectricianClick = () => {
      user ? navigate('/electrician') : navigate('/signup')
    };

    const handleMasonClick = () => {
      user ? navigate('/mason') : navigate('/signup')
    };

    const handlePaintingClick = () => {
      user ? navigate('/painter') : navigate('/signup')
    };
    
    const handleProfileClick = () => {
      navigate('/profile');
    };

  

  return (
    <div>
      {/* Logo and Authentication Section */}
      <header>
        <div className="header-container">
          <div className="logo">
            <img src={logoo} alt="Worker-Finder Logo" />
          </div>

          
        <div className='location'>
          <img style={{height:'30px',width:'30px'}} src={loc} alt="" />
        <div className="country">
          <div className="country-img">
            <img src={flag}/>
          </div>
          {locationName ? (
                // <p>{locationName.split(",").slice(0,2).join(", ")}</p>
                <p style={{fontWeight:"600"}}>{locationName.split(",")[0]}</p>
            ) : (
                <p style={{fontWeight:"600"}}>Fetching location...</p>
            )}
        </div>
        </div>

        <div className="lang-pan3">
        <img style={{height:'25px',width:'25px'}} className='globe' src={globe} alt="" />
          <select style={{outline:'none'}} className="pan3-select">
            Languague
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Urdu</option>
          </select>
        </div>


          <div className="search-box">
            <div className="categoryd">
            <select style={{outline:'none', cursor:'pointer'}} className="categorys"  >
              <option>All</option>
              <option>Plumbing</option>
              <option>Carpentry</option>
              <option>Electrical</option>
              <option>Painting</option>
              <option>Mason</option>
              </select>
              </div>

            <input type="text" id="search" placeholder={placeholderTexts[placeholderIndex]}
            value={searchQuery}
            onChange={handleSearchChange}/>
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
            <button className="search-btn" onClick={handleSearchClick}><img style={{height:'25px',width:'25px'}} src={search} alt="" /></button>
          </div>

          <div className="profile">
           {user ? (
              <img src={pro} alt="User Profile" onClick={handleProfileClick} />
             ) : (
              <div className="profile2">
               <h3 className="text">Hello, Sign In</h3>
                 <h4 className="text">Accounts & Profile</h4>

               <div className="auth-buttons">
               <p className='para'>Already have an Account?</p>
                  <button onClick={handleLoginClick} className="btn">Login</button>
                  <p className='para'>Don't have an Account?</p>
                   <button onClick={handleCreateAccountClick} className="btn">Create Account</button>
                   </div>
                     </div>
                     )}
                       </div>


           <div className='notification'>
                     <img style={{height:'35px',width:'35px'}}  src={noti} alt="" />
                     <div className='updates'>
                      <h1 style={{fontSize:'20px', color:'black', textAlign:'center'}}>Updates:-</h1>
                       <ul id="notification-list">
                         <li>🚀 New feature added: Dark Mode!</li>
                         <li>📢 Maintenance scheduled for March 5th.</li>
                         <li>🎉 Special discount on premium plans.</li>
                       </ul>
                     </div>
            </div>  
            
            <div className='help'>
              <img src={help} style={{height:'35px',width:'35px'}}  alt="" />
              <div className='ihelp'>
                      <h1 style={{fontSize:'20px', color:'black', textAlign:'center'}}>Contact Us:-</h1>
                       <p style={{color:'black',fontSize:'18px',marginTop:'10px'}}>Need help? Our support team is here for you!</p>
 
                         <div className="contact-info">
                           <p style={{fontSize:'18px',marginBottom:'10px'}}>📱 Customer Care: <strong style={{color:"black"}}>+91 98765 43210</strong></p>
                           <p style={{fontSize:'18px',marginBottom:'15px'}}>📧 Email: <strong style={{color:'black'}}>support@example.com</strong></p>
                         </div>
                         
                         <div style={{display:'flex'}}>
                         <p style={{fontSize:'18px',marginBottom:'10px',color:'black'}}> <strong>💬 Or Want To Chat: </strong></p>
                         <button className="chat-btn" onClick={handleChatToggle}>
                           💬 Chat with Us
                         </button>
                         </div>
                   
                         {showChat && (
                           <div className="chat-box">
                             <p style={{color:'black',fontSize:'15px'}}>Welcome! How can we help you?</p>
                             <input
                               type="text"
                               placeholder="Type your message..."
                               value={message}
                               onChange={(e) => setMessage(e.target.value)}
                             />
                             <button className="send-btn" onClick={handleSendMessage}>
                               Send
                             </button>
                           </div>
                         )}
                                        </div>
                                 </div>  
                            
        </div>
       </header>
 
       {/* Carousel Section */}
       <div className="carousel-container">
      <div className="carousel-image-container">
        <img style={{cursor:'pointer'}}
          src={carouselItems[currentImageIndex].image}
          alt={`Slide ${currentImageIndex + 1}`}
          className="carousel-image"
          onClick={() => handleCategoryClick(carouselItems[currentImageIndex].path)}
        />
      <div className="carousel-category">{carouselItems[currentImageIndex].category}</div>
      </div>

      {/* Text Content on the Right */}
      <div className="carousel-text">
        <p>Find skilled professionals for {carouselItems[currentImageIndex].category.toLowerCase()} services to meet all your needs.</p>
            
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

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Worker-Finder India. All rights reserved.</p>
      </footer> 
    </div>
  );
};

export default HomePage;
