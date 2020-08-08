import React from 'react';
import IFTTT from 'ifttt-webhooks-channel';
import './scss/App.scss';

import useRoomControls from './Hooks/useRoomControls';

function App() {
  const ifttt = new IFTTT('***REMOVED***');
  const controls: any = useRoomControls('bedroom');
  const triggerIFTTTWebHook = (eventName: string) => ifttt.post(eventName, []);

  const genControl =
    (total: number, name: string, key: number) =>
      <div
        onClick={() => triggerIFTTTWebHook(controls[name])}
        key={key}
        className='control noselect'
        style={{ lineHeight: 80 / total + 'vh' }}>
        {setLowercaseExceptFirst(name)}
      </div>;

  const setLowercaseExceptFirst = (word: string) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)

  return (
    <div id='App'>
      <div className='controls'>
        {controls ? Object.keys(controls).map((name, i) => genControl(Object.keys(controls).length, name, i)) : null}
      </div>
    </div>
  );
}

export default App;
