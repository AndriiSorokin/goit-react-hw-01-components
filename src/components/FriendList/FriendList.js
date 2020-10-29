import React from 'react';
import FriendItem from "./FriendItem"
import './FriendList.css'
import PropsType from 'prop-types'


const FriendList = ({friends}) => {
  return (
    <ul className="friend-list">
      {friends.map(elem =><FriendItem key={elem.id} {...elem} />)}
</ul>
  );
};

export default FriendList;


FriendList.propTypes = {
  friends: PropsType.array.isRequired
}