import { User } from '@prisma/client';

export type TUserId = User['id'];
export type TUserRegisterWrite = Omit<User, 'createdAt' | 'updatedAt'>;
export type TloginRead = Omit<User, 'createdAt' | 'updatedAt'>;
export type TloginRequest = Omit<User, 'createdAt' | 'updatedAt' | 'password'>;
