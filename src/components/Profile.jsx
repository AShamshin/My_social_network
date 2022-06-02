import nature from '../photo/nature.jpg';

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img src={nature} alt='' />
      </div>
      <div> ava + description </div>
      <div>
        My posts <div> Nev post </div>
        <div>
          <div> post 1 </div>

          <div> post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
