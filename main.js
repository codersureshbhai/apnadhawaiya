// Firebase Config
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIsgg156XcsVZE6hx22ZFgL0a_DB0X1Ns",
  authDomain: "huiii-3e59b.firebaseapp.com",
  projectId: "huiii-3e59b",
  storageBucket: "huiii-3e59b.firebasestorage.app",
  messagingSenderId: "910811215222",
  appId: "1:910811215222:web:816e823b35086f100cf657"
});

const auth = firebase.auth();

// SIGN UP
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "home.html";
    })
    .catch((error) => {
      document.getElementById("error").innerText = error.message;
    });
};

// SIGN IN
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "home.html";
    })
    .catch((error) => {
      document.getElementById("error").innerText = error.message;
    });
};

// LOGOUT
const logout = () => {
  auth.signOut().then(() => {
    window.location.href = "signl.html";
  });
};

// AUTH PROTECTION
auth.onAuthStateChanged((user) => {
  if (!user && window.location.pathname.includes("home.html")) {
    window.location.href = "signl.html";
  }

  if (user && document.getElementById("user-email")) {
    document.getElementById("user-email").innerText = user.email;
  }
});