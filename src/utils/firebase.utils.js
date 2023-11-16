import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
	// Your firebase credentials
	apiKey: "AIzaSyCjS_XM43Qtrc0928vw5Wk2nJHhdKr9Bdo",
	authDomain: "geter-electrical-db.firebaseapp.com",
	projectId: "geter-electrical-db",
	storageBucket: "geter-electrical-db.appspot.com",
	messagingSenderId: "781530194832",
	appId: "1:781530194832:web:14920c725494a32f3cc915",
	measurementId: "G-SE8FHS9F6Z",
});

var db = firebaseApp.firestore();

export { db };
