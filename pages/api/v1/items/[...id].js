import prisma from '../../../../lib/prisma';

const handle = async (req, res) => {
  const { query } = req;

  let result;

  if (query.id[0] == 'name') {
    result = await prisma.item.findMany({
      where: {
        name: {
          contains: query.id[1],
          mode: 'insensitive',
        },
      },
    });
  }

  if (query.id[0] == 'id') {
    result = await prisma.item.findMany({
      where: {
        id: parseInt(query.id[1]),
      },
    });
  }

  res.status(200).json(result);
};

export default handle;
