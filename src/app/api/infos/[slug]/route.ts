import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, {params}: { params: { slug: string } }) {
  return Response.json(
    await prisma.info.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        Request: {where: {badGuy: {slug: params.slug}}}
      }
    })
  )
}
