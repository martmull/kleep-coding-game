import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request: NextRequest) {
  const updatedRequests = await request.json()
  await prisma.$transaction(updatedRequests.map((updatedRequest) =>
      prisma.request.update({
        where: {id: updatedRequest.id}, data: {
          value: updatedRequest.value
        }
      })
    )
  )
  return Response.json({data: updatedRequests})
}
