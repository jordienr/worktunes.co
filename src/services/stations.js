import { db as fdb } from '../firebase/firebase.config'

const db = fdb.collection('stations')

export const getStations = new Promise((resolve, reject) => {
    db.get().then(qSnapshot => {
        let stationList = []
        qSnapshot.forEach(item => {
            stationList.push({id: item.id, ...item.data()})
        })
        resolve(stationList)
    })
    .catch(err => reject(err))
    
}) 