import React from 'react';
import './Profile.css'
import Stats from './Stats';

const Profile = ({name, tag, avatar, location, stats}) => {
  return (
    <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="user avatar"
          className="avatar"
          width='250px'
    />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
  </div>

  <ul className="stats">
   {Object.keys(stats).map(label => <Stats label={label} quantity={stats[label]} key={label} />)}
  </ul>
</div>
  );
};

export default Profile;