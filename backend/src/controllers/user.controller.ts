import { Request, Response } from 'express';
import { TUserId, TUserWrite } from '../models/user';
import { db } from '../utils/db';

const getUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId: TUserId = +req.params.id;

    const user = await db.user.findFirst({
      where: {
        id: userId,
      },
      select: { username: true, Book: true },
    });
    return res.status(200).send({ data: user });
  } catch (error) {
    return res.status(500).send({ message: `error: ${error}` });
  }
};

const getUserbyUsername = async (req: Request, res: Response): Promise<any> => {
  try {
    const username = req.query.username as string;

    if (!username) {
      return res.status(400).send({ message: 'please provide a valid username' });
    }

    const user = await db.user.findFirst({
      where: {
        username,
      },
      select: { username: true, Book: true },
    });

    if (!user) {
      return res.status(204).send({ data: user });
    }

    return res.status(200).send({ data: user });
  } catch (error) {
    return res.status(500).send({ message: `error: ${error}` });
  }
};

const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { username }: TUserWrite = req.body;

    const user = await db.user.create({
      data: { username },
      select: { username: true },
    });
    return res.status(201).send({ message: 'user created!', data: user });
  } catch (error) {
    return res.status(500).send({ message: `error: ${error}` });
  }
};

const editUserDetails = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId: TUserId = +req.params.id;
    const { username }: TUserWrite = req.body;

    const user = await db.user.update({
      where: {
        id: userId,
      },
      data: { username },
      select: { username: true },
    });
    return res.status(200).send({ data: user });
  } catch (error) {
    return res.status(500).send({ message: `error: ${error}` });
  }
};

export default { getUser, getUserbyUsername, createUser, editUserDetails };
