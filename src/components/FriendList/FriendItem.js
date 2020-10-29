import React from 'react';
import PropsTypes from 'prop-types'


const FriendItem = ({avatar,name,isOnline}) => {
  return (
    <li className="itemFriend">
      <span className="status" style={{backgroundColor: isOnline ? "green": "red"}}>&#9675;</span>
  <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
</li>
  );
};

export default FriendItem;

FriendItem.propsTypes = {
  avatar: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  isOnline: PropsTypes.bool.isRequired
}