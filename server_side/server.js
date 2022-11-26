const express = require('express')
const { FieldValue } = require('firebase-admin/firestore')
const app = express()
const port = 8383
const { db } = require('./firebase.js')

app.use(express.json())

app.get('/friends', async (req, res) => {
    const peopleRef = db.collection('people').doc('associates')
    const doc = await peopleRef.get()
    if (!doc.exists) {
        return res.sendStatus(400)
    }

    res.status(200).send(doc.data())
})

app.post('/addfriend', async (req, res) => {
    const { name, status } = req.body
    const peopleRef = db.collection('people').doc('associates')
    const res2 = await peopleRef.set({
        [name]: status
    }, { merge: true })
    res.status(200).send(friends)
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))