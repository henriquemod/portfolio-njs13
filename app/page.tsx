import HomeClient from "@/presentation/pages/home";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { FirebaseClient } from "@/infra/firebase/firebase-get-data";

async function getData() {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const firebaseClient = new FirebaseClient(database);

  const res = await firebaseClient.get("profileData");

  return res;
}

export default async function Home() {
  const data = await getData();

  return <HomeClient profileData={data} />;
}
