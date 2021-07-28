import { PrismaClient } from '@prisma/client';
import prisma from '../../../../../lib/prisma';

const handle = async (req, res) => {
  const { query } = req;

  const result = await prisma.item.findMany({
    where: {
      name: {
        contains: query.name,
        mode: 'insensitive',
      },
    },

    include: {
      reviews: {
        select: {
          stars: true,
        },
      },
    },
  });

  res.status(200).json(result);
};

export default handle;
