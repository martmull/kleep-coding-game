import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, {params}: { params: { slug: string } }) {
  return Response.json(
    await prisma.request.findMany({
      where: {badGuy: {slug: params.slug}},
      select: {
        id: true,
        value: true,
        info: {
          select: {
            name: true,
            type: true
          }
        },
      }
    })
  )
}
