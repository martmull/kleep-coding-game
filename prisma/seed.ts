import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.badGuy.createMany({
    data: [
      {name: 'Kim-Jung Un', slug: 'kim-jung-un'},
      {name: 'Xavier Dupont de Ligonnès', slug: 'xavier-dupont-de-ligonnes'},
      {name: 'Vladimir Poutine', slug: 'vladimir-putin'},
      {name: 'Le Chiffre', slug: 'le-chiffre'},
      {name: 'Thanos', slug: 'thanos'},
      {name: 'Voldemort', slug: 'voldemort'},
    ]
  })
  await prisma.info.createMany({
    data: [
      {name: 'Age', type: 'NUMBER'},
      {name: 'Nombre d\'enfant', type: 'NUMBER'},
      {name: 'Lieu de naissance', type: 'TEXT'},
      {name: 'Date de naissance', type: 'DATE'},
      {name: 'Petit-déjeuner', type: 'TEXT'},
      {name: 'Arme favorite', type: 'TEXT'},
      {name: 'Lieu de résidence', type: 'TEXT'},
      {name: 'Fortune estimée', type: 'NUMBER'},
      {name: 'Date présumée du prochain crime', type: 'DATE'},
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
