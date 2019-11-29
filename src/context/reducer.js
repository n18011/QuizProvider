import {firestore} from './firebase'

const initialState = {
  isDark: false,
  quizData: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'isDark':
      return { ...state, isDark: !state.isDark }
    case 'sel_quiz':
      //TODO:read only cache if !cache network get data
      const docRef = firestore.collection('seaj').doc(action.payload)
      const data = []
      docRef.get({source: 'cache'})
      .then(doc => {
        console.log('Cached document data: ', doc.data())
        data.push(doc.data())
      })
      .catch(error => {
        console.log('Error getting cached document => ', error)
      })
      // network get data
      /*
      docRef.get().then(doc => {
        if (doc.exists) {
        console.log('doc.data => ', doc.data())
        data.push(doc.data())
        } else {
          console.log('doc undifined')
        }
      })
      .catch(error => {
        console.log('Error getting document', error)
      })
      */
      return { ...state, quizData: data}
    default:
      throw new Error()
  }
}

export { initialState, reducer }