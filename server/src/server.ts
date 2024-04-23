import {fastify} from 'fastify'

import {fastifyCors} from '@fastify/cors'
import { getAllVehiclesRoute } from './routes/getAllVehiclesRoute'
import { getAllRecordsRoute } from './routes/getAllRecordsRoute'
import { createVehicleRoute } from './routes/createVehicleRoute'
import { deleteVehicleRoute } from './routes/deleteVehicleRoute'
import { createRecordRoute } from './routes/createRecordRoute'
import { getVehicleByLicensePlateRoute } from './routes/getVehicleByLicensePlateRoute'

const app = fastify()
app.register(fastifyCors, {
  origin: "*"
})
app.register(getAllVehiclesRoute, {prefix: "vehicle"})
app.register(getVehicleByLicensePlateRoute, {prefix: "vehicle"})
app.register(createVehicleRoute, {prefix: "vehicle"})
app.register(deleteVehicleRoute, {prefix: "vehicle"})
app.register(getAllRecordsRoute, {prefix: "record"})
app.register(createRecordRoute, {prefix: "record"})

const port = process.env.PORT || 3333;

app.listen({
  port: Number(port),
  host: '0.0.0.0'
}).then(() => {
  console.log(`HTTP server Running on ${port}`)
})
