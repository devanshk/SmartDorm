import { useEffect, useState } from 'react';
import firebase from '../firebase';

function useRoomNames(){
  const [rooms, setRooms] = useState<string[]>([]);

  useEffect(() => {
    const ref = firebase.database().ref('rooms');
    ref.on('value', snapshot => {
      setRooms(Object.keys(snapshot.val()))
    });

    return () => ref.off('value');
  });

  return rooms;
}

export default useRoomNames;
