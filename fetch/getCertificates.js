import firebase from "../firebase/clientApp";

export const getCertificates = async() => {
    const db = firebase.firestore();
    const certificatesCollection = db.collection("certificates");
    const snapshot = await certificatesCollection.get();

    if (snapshot.empty) {
        return snapshot;
    }

    return snapshot;
};