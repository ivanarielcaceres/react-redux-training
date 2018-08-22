import * as firebase from 'firebase';

import { FirebaseConfig } from './firebase-data';
firebase.initializeApp(FirebaseConfig);

export const databaseRef = firebase.database();
