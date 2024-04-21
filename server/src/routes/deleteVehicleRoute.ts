import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import z from "zod"
export async function deleteVehicleRoute(app: FastifyInstance){
  app.delete("/:vehicleId", async (req, reply) => {
    const paramsSchema = z.object({
      vehicleId: z.string().transform(it=> Number(it))
    })
    const {vehicleId} = paramsSchema.parse(req.params)
    await prisma.$transaction(async (prisma) => {
      await prisma.record.updateMany({
        data: {
          vehicleId: null
        },
        where: {
          vehicleId
        }
      })
      await prisma.vehicle.delete({
        where: {
          id: vehicleId
        }
      })
    })
  })
}