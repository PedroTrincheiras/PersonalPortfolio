import firebase from '../firebase/clientApp'

export const getProjectData = async (id) => {
  const db = firebase.firestore()
  const projectCollection = db.collection('project')
  const projectDoc = await projectCollection.doc(id).get()

  if (!projectDoc.exists) {
    return null
  }
  return projectDoc.data()
}