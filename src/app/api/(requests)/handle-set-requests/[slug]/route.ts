import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest, {params}: { params: { slug: string } }) {
  const infos = await request.json()
  const badGuy = await prisma.badGuy.findUniqueOrThrow({where: {slug: params.slug}})
  await prisma.$transaction([
    prisma.request.deleteMany({
      where: {
        badGuyId: badGuy.id,
        infoId: {in: infos.map((info) => info.id)}
      }
    }),
    prisma.request.createMany({
      data: infos.filter((info) => info.selected).map((info) => ({
        badGuyId: badGuy.id,
        infoId: info.id
      }))
    })
  ])
  return Response.json({data: infos})
}
