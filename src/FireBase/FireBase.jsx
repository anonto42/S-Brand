import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXEb3b22eyHlcoR7UZe_mt1v2j2-okiBs",
  authDomain: "fir-project-b3e41.firebaseapp.com",
  projectId: "fir-project-b3e41",
  storageBucket: "fir-project-b3e41.appspot.com",
  messagingSenderId: "374604651559",
  appId: "1:374604651559:web:56d19c0110f303308d8202",
  measurementId: "G-4V6W4Z221V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDB, auth , storage };