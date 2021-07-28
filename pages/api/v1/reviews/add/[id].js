import prisma from '../../../../../lib/prisma';

const handle = async (req, res) => {
  console.log(req.body);

  const result = await prisma.review.create({
    data: { ...req.body, itemId: parseInt(req.query.id) },
  });

  res.status(201).json(result);
};

export default handle;
