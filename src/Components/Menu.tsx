import React from 'react';
import '../scss/Menu.scss';

import useRoomNames from '../Hooks/useRoomNames';

type Props = {
  room: string,
  onRoomChange: (arg0: string) => void,
  handleMenuClose: () => void
}

function Menu(props: Props) {
  const roomNames: any = useRoomNames();
  const setLowercaseExceptFirst = (word: string) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
  const genRoomItem = (name: string) =>
    <div
      onClick={() => props.onRoomChange(name)}
      className={'room-option' + (name === props.room ? ' selected' : '')}>
      {setLowercaseExceptFirst(name)}
    </div>

  return (
    <div id='menu'>
      <div className='bg' onClick={props.handleMenuClose}></div>
      {roomNames.map((name: string) => genRoomItem(name))}
    </div >
  );
}

export default Menu;
