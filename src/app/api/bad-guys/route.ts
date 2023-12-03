import { prisma } from "@/lib/prisma";

export async function GET() {
  let users = await prisma.badGuy.findMany();
  return Response.json(users)
}
