import { _logout_player } from './_logout_player';
import { _add_player } from './add_player';
import { _attack } from './game/battle/_attack';
import { _set_enemy } from './game/battle/_set_enemy';

export default [_add_player, _logout_player, _set_enemy, _attack];
