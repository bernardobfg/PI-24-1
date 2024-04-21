import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function createRecordRoute(app: FastifyInstance){
  app.post("/", async (req) => {
    const bodySchema = z.object({
      licensePlate: z.string(),
      confidence: z.number(),
      allowed: z.boolean(),
    })
    
    const {confidence, licensePlate, allowed} = bodySchema.parse(req.body)
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        licensePlate
      },
      select: {id: true}
    })
    const vehicleId = vehicle?.id ??null
    await prisma.record.create({
      data: {
        licensePlate,
        confidence,
        allowed,
        vehicleId,
        registeredAt: new Date()
      }
    })
  })
}