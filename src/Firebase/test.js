import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
    .collection("users")
    .doc("EqaBmDKeLnT9CBV95chJ")
    .collection("cartItems")
    .doc("5e7JkwxLLLD091lu2b0p");
firestore.doc("/users/EqaBmDKeLnT9CBV95chJ/cartItems/5e7JkwxLLLD091lu2b0p");
firestore.collection("/users/EqaBmDKeLnT9CBV95chJ/cartItems");
