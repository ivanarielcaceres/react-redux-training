import * as firebase from 'firebase';

import { FirebaseConfig } from './firebase-data';
firebase.initializeApp(FirebaseConfig);

const database = firebase.database();
export const itemsRef = database.ref('noticias');
