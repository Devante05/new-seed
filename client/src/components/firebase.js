import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDON71aFjRtNjJTs7-8-okTuKlUz5c9R-4",
    authDomain: "plant-app-7ea76.firebaseapp.com",
    projectId: "plant-app-7ea76",
    storageBucket: "plant-app-7ea76.appspot.com",
    messagingSenderId: "861267277415",
    appId: "1:861267277415:web:4c6837ccd62f0d0a74c6c2",
    measurementId: "G-7G8007NN47"
})


export const auth = app.auth()
export default app