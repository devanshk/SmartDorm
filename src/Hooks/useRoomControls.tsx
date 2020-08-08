import { useEffect, useState } from 'react';
import firebase from '../firebase';

function useRoomControls(room: string){
  const [controls, setControls] = useState();

  useEffect(() => {
    const ref = firebase.database().ref('rooms').child(room);
    ref.on('value', snapshot => {
      setControls(snapshot.val())
      console.log(snapshot.val());
    });

    return () => ref.off('value');
  }, [room]);

  return controls;
}

export default useRoomControls;
