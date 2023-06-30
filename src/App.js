import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import custom CSS file
import FieldsPage from './FieldsPage';
import ServicesPage from './ServicesPage';
import TrainingSessionsPage from './TrainingSessionsPage';
import BookFieldPage from './BookFieldPage';
import ReviewsPage from './ReviewsPage';

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <h1>Welcome to Greatest Kicks</h1>
        <p className="slogan">Creating Soccer Legends</p>
      </div>
      <div className="homepage-content">
        <p className="homepage-paragraph">
          We are located at 185 Lees Avenue. Our trainers are picked for their superior skills and knowledge from across the globe. Come and instantly improve your soccer skills. At Greatest Kicks, we guarantee you will leave with new skills and be a better player. We also provide reservations for 7v7 and 11v11 fields to come and enjoy a kick around with your friends.
        </p>
        <p className="homepage-paragraph">
          Come visit us today and become an all-time soccer great! Prepare a great match with your friends!
        </p>
        <div className="homepage-buttons">
          <Link to="/training" className="btn btn-primary">Book Training Session</Link>
          <span className="button-spacing"></span>
          <Link to="/book" className="btn btn-primary">Book Field</Link>
        </div>
        <div className="homepage-images">
          <img src="https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkzOTA5OTY2MjM3NjcyODk5/world-cup-soccer-ball.jpg" alt="Image 1" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BC_Place_2015_Women%27s_FIFA_World_Cup.jpg/1200px-BC_Place_2015_Women%27s_FIFA_World_Cup.jpg" alt="Image 2" />
        </div>
      </div>
    </div>
  );
}






function App() {
  return (
    <Router>
      <div className="app">
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-centered">
          <Container>
            <Navbar.Brand as={Link} to="/" className="brand-left">Greatest Kicks</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/fields">Fields</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/training">Book Training Session</Nav.Link>
                <Nav.Link as={Link} to="/book">Book Field</Nav.Link>
                <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fields" element={<FieldsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/training" element={<TrainingSessionsPage />} />
            <Route path="/book" element={<BookFieldPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
          </Routes>
        </div>
        <footer className="footer bg-dark text-white text-center py-3">
          <Container>
            <p>Location: Greatest Kicks, 185 Lees Avenue, Ottawa, ON K15 5JB</p>
            <p>Phone: 613-262-0987</p>
            <p>Hours: Monday-Sunday: 8am-10pm</p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
