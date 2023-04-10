import express, { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'

const PORT = 8000
const app = express()

app.get('/quiz-item', async (req: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get( 'https://50be320e-64e7-4166-854e-532afd1f8c43-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/quizzes/collections/quirky_quizzes', {
            headers: {
                'X-Cassandra-Token':'AstraCS:UcUiREvMdetvzBcuRyNZctkG:8fc7b418814f9f7c57f1e255d93cc89dbd77f43b6c323d967b425e1cbbfefc66',
                accept: 'application/json'
            }
        })
        if (response.status === 200) {
            const quizItem = await response.data
            res.setHeader( 'Access-Control-Allow-Origin', 'http://localhost:3000')
            res.send(quizItem)
        }
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log('server is running on port' + PORT))