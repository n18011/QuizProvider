import { firestore } from './firebase'
import localforage from 'localforage'

const initialState = {
  isDark: false,
  quizData: [],
  result: []
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
      const colRef = firestore.collection('seaj').doc(action.payload).collection('questions')
      const quizData = []
      // data get to indexedDB.localforage
      localforage.getItem(action.payload)
        .then((value) => {
          console.log('localforage.getItem => ', value)
          if (value !== null) {
            value.map(v => quizData.push(v))
          } else {
            // get FireStore data
            colRef.get().then(async(snapshot) => {
              await snapshot.forEach((doc) => {
                console.log('doc.data => ', doc.data())
                quizData.push(doc.data())
            })
                // data set to indexedDB.localforage
                await localforage.setItem(action.payload, quizData)
                  .then(value => {
                    console.log('sucess setItem local => ', value)
                  })
                  .catch(err => {
                    console.log('Error setItem local => ', err)
                  })
          })
              .catch(error => {
                console.log('Error getting document', error)
              })
          }
        })
        .catch((err) => {
          console.log('localforage.getItem error => ', err)
        })

      return { ...state, quizData}

      /**
       * response [SET]:
       */
    case 'send_result':
      const result = []
      // TODO:localforageに結果を送信
      localforage.getItem('result')
      .then(async (value) => {
        console.log('localforage.getItem result => ', value)
          await result.push(action.payload)
          await localforage.setItem('result', result)
          .then(value => {
            console.log('localforage.setItem result => ', value)
          })
          .catch(err => {
            console.log('localforage.setItem error', err)
          })
        /*
        const res = value
        await res.push(action.payload)
        await result.push(action.payload)
        await localforage.setItem('result', res)
      .then(value => {
        console.log('localforage.setItem result => ', value)
      })
      .catch(err => {
        console.log('localforage.setItem error => ', err)
      })
      */
      })
      return { ...state, result}

    default:
      throw new Error()
  }
}

export { initialState, reducer }