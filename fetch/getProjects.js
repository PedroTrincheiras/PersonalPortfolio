import firebase from "../firebase/clientApp";

export const getProjects = async() => {
    const db = firebase.firestore();
    const projectCollection = db.collection("project");
    const snapshot = await projectCollection.get();

    if (snapshot.empty) {
        return snapshot;
    }

    return snapshot;
};