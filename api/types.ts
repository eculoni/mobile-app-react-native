// types.ts

export enum PowerUps {
  ENERGY = 'energy',
  SHIELD = 'shield',
  RELOAD = 'reload',
}

export enum Units {
  TANK = 'tank',
  SWORDSMAN = 'swordsman',
  ARCHER = 'archer',
}

export type Player = {
  id: string;
  name: string;
  hp: number;
  currentPowerUp: PowerUps | null;
  unit: Units;
}

export type PlayerAction = {
  type: 'PLAY_UNIT' | 'USE_POWER_UP';
  payload: {
    id: string;
    data: any;
  };
}

export type State = {
  players: { [id: string]: Player };
}