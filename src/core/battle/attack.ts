import { Attack_Roll } from '../utils/Rolls';

export const battle_attack = async ({ character, enemy }: { character: any; enemy: any }) => {
  //  Calcula o ataque do player
  const attack_player: number = Attack_Roll({ min: character.attack_min, max: character.attack_max });

  // Calcula o ataque do inimigo
  const attack_enemy: number = Attack_Roll(enemy.attack);

  // diminui a vida
  character.life_current -= attack_enemy;
  enemy.life.current -= attack_player;

  // retorna um novo objeto
  return { enemy, character };
};
