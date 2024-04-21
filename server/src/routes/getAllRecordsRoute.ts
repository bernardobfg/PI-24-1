import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllRecordsRoute(app: FastifyInstance){
  app.get("/", async () => {
    return await prisma.record.findMany({
      include: {
        vehicle: true
      }
    })

  })
}