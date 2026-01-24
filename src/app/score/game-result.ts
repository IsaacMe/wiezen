import Big from 'big.js';
import { GameTypes } from './game-types.enum';
import { PlayerActionEnum } from './player-action.enum';
import { Scores } from './scores';

export interface GameResult {
    type: GameTypes;
    toJSON(): any;
}

export function GameResultfromJSON(entry: any): GameResult{
    if ([GameTypes.Abondance9, GameTypes.Abondance10, GameTypes.Abondance11, GameTypes.Abondance12, GameTypes.Solo, GameTypes.SoloSlim].includes(entry.type)){
        return AbondanceResult.fromJSON(entry);
    } else if ([GameTypes.AskingAndJoining, GameTypes.Trull].includes(entry.type)) {
        return AskingAndJoiningResult.fromJSON(entry);
    } else if (entry.type === GameTypes.Alone) {
        return AloneResult.fromJSON(entry);
    } else if (entry.type === GameTypes.Passing) {
        return PassingResult.fromJSON(entry);
    } else if ([GameTypes.Misery, GameTypes.OpenMisery].includes(entry.type)) {
        return MiseryResult.fromJSON(entry);
    } else {
        return new OtherResult();
    }
}


export class PassingResult implements GameResult {
    public type = GameTypes.Passing;
    constructor(public tricks: Scores) {}

    static fromJSON(entry: any): GameResult {
        return new PassingResult(Scores.fromJSON(entry.tricks));
    }

    public toJSON(): any {
        return { type: this.type, tricks: this.tricks };
    }
}


export class AbondanceResult implements GameResult {
    constructor(public player: number,
    public won: boolean,
    public type: GameTypes) {}

    static fromJSON(entry: any): GameResult {
        return new AbondanceResult(entry.player, entry.won, entry.type);
    }

    public toJSON(): any {
        return { type: this.type, won: this.won, player: this.player };
    }
}

export class AskingAndJoiningResult implements GameResult {
    constructor(public player1: number,
    public player2: number, 
    public tricks: number,
    public type: GameTypes.AskingAndJoining | GameTypes.Trull) {}

    static fromJSON(entry: any): GameResult {
        return new AskingAndJoiningResult(entry.player1, entry.player2, entry.tricks, entry.type);
    }

    public toJSON(): any {
        return { type: this.type, player1: this.player1, player2: this.player2, tricks: this.tricks };
    }
}

export class AloneResult implements GameResult {
    public type = GameTypes.Alone;
    constructor(public player: number,
    public tricks: number) {}

    static fromJSON(entry: any): GameResult {
        return new AloneResult(entry.player, entry.tricks);
    }

    public toJSON(): any {
        return { type: this.type, player: this.player, tricks: this.tricks };
    }
}


export class MiseryResult implements GameResult {
    constructor(public playerActions: PlayerActionEnum[],
    public type: GameTypes) {}

    static fromJSON(entry: any): GameResult {
        return new MiseryResult(entry.playerActions, entry.type);
    }

    public toJSON(): any {
        return { type: this.type, playerActions: this.playerActions };
    }
}

export class OtherResult {
    public type = GameTypes.Other;

    public getSummary(): string {
        return "";
    }

    public toJSON(): any {
        return { type: this.type };
    }
}