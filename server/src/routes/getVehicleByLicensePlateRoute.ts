import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function getVehicleByLicensePlateRoute(app: FastifyInstance){
  app.get("/:licensePlate", async (req) => {
    const paramsSchema = z.object({
      licensePlate: z.string()
    })
    const {licensePlate} = paramsSchema.parse(req.params)
    return await prisma.vehicle.findUnique({
      where: {
        licensePlate
      }
    })  
  })
}