import { iAttrubutes } from '../Player/Attributes';

export interface iProfile {
  name: string;
  level: {
    current: number;
    exp: number;
  };
  attributes: iAttrubutes;
}

export interface iPlayer {
  name: string;
  level: {
    current: number;
    exp: number;
  };
  attributes: iAttrubutes;
}
