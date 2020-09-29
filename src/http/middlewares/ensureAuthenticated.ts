import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '../../errors/AppError';
import authConfig from '../../config/auth';

interface TokenPayload {
  office_id: string;
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { office_id, sub } = decoded as TokenPayload;

    req.user = {
      id: sub,
      office_id,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}
