import { firestore } from './firebase'
import localforage from 'localforage'

const initialState = {
  isDark: false,
  quizData: []
}

const reducer = (state, action) => {
  switch (action.type) {
    /**
     * state中のisDarkのboolを反転
     * response [UPDATE]: {isDark: !state.isDark}
     */
    case 'isDark':
      return { ...state, isDark: !state.isDark }

    /**
     * response [UPDATE]: {quizData: data}
     * getIndexedDB.localforage or getFirestoreData->setIndexedDB.loaclforage
    **/
    case 'sel_quiz':
      const docRef = firestore.collection('seaj').doc(action.payload)
      const quizData = []
      // data get to indexedDB.localforage
      localforage.getItem(action.payload)
        .then((value) => {
          console.log('localforage.getItem => ', value)
          if (value !== null) {
            quizData.push(value)
          } else {
            // get FireStore data
            docRef.get().then(async (doc) => {
              if (doc.exists) {
                console.log('doc.data => ', doc.data())
                await quizData.push(doc.data())
                // data set to indexedDB.localforage
                await localforage.setItem(action.payload, doc.data())
                  .then(value => {
                    console.log('sucess setItem local => ', value)
                  })
                  .catch(err => {
                    console.log('Error setItem local => ', err)
                  })
              } else {
                console.log('doc undifined')
              }
            })
              .catch(error => {
                console.log('Error getting document', error)
              })
          }
        })
        .catch((err) => {
          console.log('localforage.getItem error => ', err)
        })

      return { ...state, quizData }


    default:
      throw new Error()
  }
}

export { initialState, reducer }