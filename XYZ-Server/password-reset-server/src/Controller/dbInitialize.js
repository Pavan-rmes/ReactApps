import {initializeApp, applicationDefault, cert} from "firebase-admin/app"
import {getFirestore, Timestamp, FieldValue} from "firebase-admin/firestore"
import { serviceAccount } from "../../serviceAccountKey.js"

initializeApp({
    credential: cert(serviceAccount)
  });

export const db = await getFirestore();
console.log("DB connected")