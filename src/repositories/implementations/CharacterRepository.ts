import { PrismaClient } from '@prisma/client';

import { database } from '../../database';
import { iCharacterrepository } from './../iCharacterRepository';

export class Characterrepository implements iCharacterrepository {
  async remove(data: { id: string }): Promise<any> {
    return await database.characters.delete({ where: { id: data.id } });
  }
  async findByUser(data: { user_id: string }): Promise<any> {
    return await database.characters.findMany({
      where: { user_id: data.user_id },
      include: { Attributes: true },
    });
  }

  async findByName(data: { name: string }): Promise<any> {
    return await database.characters.findUnique({ where: { name: data.name } });
  }

  async store(data: { name: string; id: string }): Promise<any> {
    const character: any = await database.$transaction(async (prisma: any) => {
      let character = await prisma.characters.create({
        data: {
          name: data.name,
          level: 1,
          user_id: data.id,
        },
      });

      const attributes = await prisma.attributes.create({
        data: {
          character_id: character.id,
          attack_min: 1,
          attack_max: 3,
          defense_rate: 2,
          life_current: 20,
          life_max: 20,
          exp: 0,
        },
      });

      return { character, attributes };
    });

    return character;
  }
}
