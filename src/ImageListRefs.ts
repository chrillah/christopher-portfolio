import { ref, StorageReference } from 'firebase/storage';
import { storage } from './firebase';

const imageListRefs: StorageReference[] | null = [
  ref(storage, 'images/eyes/'),
  ref(storage, 'images/rickandmorty/'),
  ref(storage, 'images/sweet/'),
  ref(storage, 'images/tjuvgods/'),
  ref(storage, 'images/gomoku/'),
  ref(storage, 'images/kwitter/'),
  ref(storage, 'images/techware/'),
];

export default imageListRefs;
