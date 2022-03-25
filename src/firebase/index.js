import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3I2ec63zE-vh-j3Bq6IDvHvb4RxPwq1k",
  authDomain: "vue-firebase-c67eb.firebaseapp.com",
  projectId: "vue-firebase-c67eb",
  storageBucket: "vue-firebase-c67eb.appspot.com",
  messagingSenderId: "660352831261",
  appId: "1:660352831261:web:c6ef901b80cf5bc8025bf4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
