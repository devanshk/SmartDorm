import React, { useState } from 'react';
import './scss/App.scss';

import ControlPanel from './Components/ControlPanel';
import Menu from './Components/Menu';

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [room, setRoom] = useState('bedroom');

  return (
    <div id='App'>
      <div id='menu-toggle' onClick={() => setShowMenu(!showMenu)}>⪌</div>
      <ControlPanel room={room} inBackground={showMenu} />
      {showMenu &&
        <Menu
          room={room}
          onRoomChange={setRoom}
          handleMenuClose={() => setShowMenu(false)}
        />}
    </div>
  );
}

export default App;
