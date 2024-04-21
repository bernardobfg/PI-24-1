import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllVehiclesRoute(app: FastifyInstance){
  app.get("/", async () => {
    return await prisma.vehicle.findMany()
  })
}