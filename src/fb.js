import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBUSfJJasUhNeySqg8uAIM8JNhogCHDE2w",
    authDomain: "rezeptradar-c05b0.firebaseapp.com",
    projectId: "rezeptradar-c05b0",
    storageBucket: "rezeptradar-c05b0.appspot.com",
    messagingSenderId: "166002578839",
    appId: "1:166002578839:web:58e7922e05172d7467e0d2",
    measurementId: "G-74C8CZSVD0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = firebase.firestore(); //initialisiert verbindung zu firebase

  db.settings({ timestampsInSnapshots:true });

  export default db;