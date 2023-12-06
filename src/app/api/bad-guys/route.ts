import { prisma } from "@/lib/prisma";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const query = {select: {id: true, name: true}}
  if (request.nextUrl.searchParams.get('type') === 'spy') {
    query['where'] = {Request: {some: {}}}
  }
  return Response.json(await prisma.badGuy.findMany(query))
}
