import './App.css';
import Header from './components/Header';
import Nav from './components/Navbar';
import Profile from './components/Profile';
// import nature from './photo/nature.jpg';
const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
};
export default App;
