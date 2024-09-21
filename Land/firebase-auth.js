// File: firebase-auth.js

// Firebase configuration and initialization
const firebaseConfig = {
    apiKey: "AIzaSyAYWp1h1C2AALmc39b6cqwv6GSqlWQrR1c",
    authDomain: "farmbuddy-106.firebaseapp.com",
    databaseURL: "https://farmbuddy-106-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "farmbuddy-106",
    storageBucket: "farmbuddy-106.appspot.com",
    messagingSenderId: "246405477593",
    appId: "1:246405477593:web:76c615bf7f242294317ac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.addEventListener('load', () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            document.getElementById('logout').style.display = 'block';
        } else {
            window.location.href = 'Firebase-login-signup-master/index.html';
        }
    });

    document.getElementById('logout').addEventListener('click', () => {
        signOut(auth).then(() => {
            window.location.href = 'Firebase-login-signup-master/index.html';
        }).catch(error => {
            alert(error.message);
        });
    });
});
