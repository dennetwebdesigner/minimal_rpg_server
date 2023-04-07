import { iProfile, iPlayer } from '../Interfaces/Player';
import { iAttrubutes } from './Attributes';


export class Player implements iPlayer {
  enemy: any;
  name: string;
  level: {
    current: number;
    exp: number;
  };
  attributes: iAttrubutes;

  constructor(data: iProfile) {
    this.name = data.name;
    this.level = data.level;
    this.attributes = data.attributes;
    this.enemy = null;
  }
}
