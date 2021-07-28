import prisma from '../../../../lib/prisma';

const handle = async (req, res) => {
  const result = await prisma.review.findMany({
    where: {
      itemId: parseInt(req.query.id),
    },
  });

  res.json(result);
};

export default handle;
