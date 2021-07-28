import prisma from '../../../../lib/prisma';

const handle = async (req, res) => {
  console.log(req.body);

  const result = await prisma.item.create({
    data: req.body,
  });

  res.status(201).json(result);
};

export default handle;
