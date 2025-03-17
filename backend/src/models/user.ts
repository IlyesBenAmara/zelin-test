import { User } from '@prisma/client';

export type TUserId = User['id'];
export type TUserWrite = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
