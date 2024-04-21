import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function createVehicleRoute(app: FastifyInstance){
  app.post("/", async (req, reply) => {
    const bodySchema = z.object({
      owner: z.string(),
      licensePlate: z.string()
    })
    const {owner, licensePlate} = bodySchema.parse(req.body)
    await prisma.vehicle.create({
      data: {
        licensePlate,
        owner,
      }
    })
  })
}