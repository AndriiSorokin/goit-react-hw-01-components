import React from 'react';
import './Profile.css'
import Stats from './Stats';
import PropsTypes from 'prop-types'

const Profile = ({name, tag, avatar, location, stats}) => {
  return (
    <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="user avatar"
          className="avatarProfile"
          width='250px'
    />
        <p className="nameProfile">{name}</p>
        <p className="tagProfile">{tag}</p>
        <p className="locationProfile">{location}</p>
  </div>

  <ul className="stats">
   {Object.keys(stats).map(label => <Stats label={label} quantity={stats[label]} key={label} />)}
  </ul>
</div>
  );
};

export default Profile;

Profile.propsTypes = {
  name: PropsTypes.string.isRequired,
  tag: PropsTypes.string.isRequired,
  location: PropsTypes.string.isRequired,
  stats: PropsTypes.string.isRequired,
}