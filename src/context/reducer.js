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
      const data = []
      // network get data
      firestore.collection('seaj').doc(action.payload).get().then(doc => {
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
      return { ...state, quizData: data}
    default:
      throw new Error()
  }
}

export { initialState, reducer }