import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { eBillValidationSchema } from 'validationSchema/e-bills';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.e_bill
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getEBillById();
    case 'PUT':
      return updateEBillById();
    case 'DELETE':
      return deleteEBillById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getEBillById() {
    const data = await prisma.e_bill.findFirst(convertQueryToPrismaUtil(req.query, 'e_bill'));
    return res.status(200).json(data);
  }

  async function updateEBillById() {
    await eBillValidationSchema.validate(req.body);
    const data = await prisma.e_bill.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteEBillById() {
    const data = await prisma.e_bill.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
