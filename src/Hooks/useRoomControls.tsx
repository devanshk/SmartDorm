import { useEffect, useState } from 'react';
import firebase from '../firebase';

function useRoomControls(room: string){
  const [controls, setControls] = useState({});

  useEffect(() => {
    if (room.length === 0){
      return;
    }
    const ref = firebase.database().ref('rooms').child(room);
    ref.on('value', snapshot => {
      setControls(snapshot.val())
    });

    return () => ref.off('value');
  }, [room]);

  return controls;
}

export default useRoomControls;
