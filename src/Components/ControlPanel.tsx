import React from 'react';
import IFTTT from 'ifttt-webhooks-channel';
import '../scss/ControlPanel.scss';

import useRoomControls from '../Hooks/useRoomControls';

type Props = {
  room: string,
  inBackground: boolean
}

function ControlPanel(props: Props) {
  const ifttt = new IFTTT(process.env.REACT_APP_IFTTT_KEY!);
  const controls: any = useRoomControls(props.room);
  const triggerIFTTTWebHook = (eventName: string) => {
    for (var i = 0; i < controls.length; i++) {
      ifttt.post(controls[i], []);
    }
  };

  const genControl =
    (total: number, name: string, key: number) =>
      <div
        onClick={() => triggerIFTTTWebHook(controls[name])}
        key={key}
        className={'control noselect'}
        style={{ lineHeight: 80 / total + 'vh' }}>
        {setLowercaseExceptFirst(name)}
      </div>;

  const setLowercaseExceptFirst = (word: string) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)

  return (
    <div className = {'controls animated' + (props.inBackground ? ' blurred' : '')} >
      { controls? Object.keys(controls).map((name, i) => genControl(Object.keys(controls).length, name, i)) : null}
    </div >
  );
}

export default ControlPanel;
