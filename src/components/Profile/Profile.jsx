import s from './Profile.module.css';

import nature from '.../photo/nature.jpg';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src={nature} alt='' />
      </div>
      <div> ava + description </div>
      <div>
        My posts <div> Nev post </div>
        <div className={s.posts}>
          <div className={s.item}> post 1 </div>

          <div className={s.item}> post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
