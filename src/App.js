import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
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
