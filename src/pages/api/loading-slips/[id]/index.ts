import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { loadingSlipValidationSchema } from 'validationSchema/loading-slips';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.loading_slip
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getLoadingSlipById();
    case 'PUT':
      return updateLoadingSlipById();
    case 'DELETE':
      return deleteLoadingSlipById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getLoadingSlipById() {
    const data = await prisma.loading_slip.findFirst(convertQueryToPrismaUtil(req.query, 'loading_slip'));
    return res.status(200).json(data);
  }

  async function updateLoadingSlipById() {
    await loadingSlipValidationSchema.validate(req.body);
    const data = await prisma.loading_slip.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteLoadingSlipById() {
    const data = await prisma.loading_slip.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
