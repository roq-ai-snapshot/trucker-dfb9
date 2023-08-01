import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { fuelValidationSchema } from 'validationSchema/fuels';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.fuel
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getFuelById();
    case 'PUT':
      return updateFuelById();
    case 'DELETE':
      return deleteFuelById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getFuelById() {
    const data = await prisma.fuel.findFirst(convertQueryToPrismaUtil(req.query, 'fuel'));
    return res.status(200).json(data);
  }

  async function updateFuelById() {
    await fuelValidationSchema.validate(req.body);
    const data = await prisma.fuel.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteFuelById() {
    const data = await prisma.fuel.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
