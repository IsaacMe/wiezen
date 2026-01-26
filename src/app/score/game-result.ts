import Big from 'big.js';
import { GameTypes } from './game-types.enum';
import { PlayerActionEnum } from './player-action.enum';
import { Scores } from './scores';

export interface GameResult {
    type: GameTypes;
    toJSON(): any;
}

export function GameResultfromJSON(entry: any): GameResult {
    if (entry.type in GameTypes) {
        if ([GameTypes.Abondance9, GameTypes.Abondance10, GameTypes.Abondance11, GameTypes.Abondance12, GameTypes.Solo, GameTypes.SoloSlim].includes(entry.type)) {
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
    } else {
        throw new SyntaxError('Game Result invalid');
    }
}


export class PassingResult implements GameResult {
    public type = GameTypes.Passing;
    constructor(public tricks: Scores) { }

    static fromJSON(entry: any): GameResult {
        if (entry.tricks === undefined) {
            throw new SyntaxError('PassingResult: missing tricks');
        }
        return new PassingResult(Scores.fromJSON(entry.tricks));
    }

    public toJSON(): any {
        return { type: this.type, tricks: this.tricks };
    }
}


export class AbondanceResult implements GameResult {
    constructor(public player: number,
        public won: boolean,
        public type: GameTypes) { }

    static fromJSON(entry: any): GameResult {
        if (typeof entry.player !== 'number' || entry.player < 1 || entry.player > 4) {
            throw new SyntaxError('AbondanceResult: invalid player');
        }
        if (typeof entry.won !== 'boolean') {
            throw new SyntaxError('AbondanceResult: invalid won');
        }
        if (![GameTypes.Abondance9, GameTypes.Abondance10, GameTypes.Abondance11, GameTypes.Abondance12, GameTypes.Solo, GameTypes.SoloSlim].includes(entry.type)) {
            throw new SyntaxError('AbondanceResult: invalid type');
        }
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
        public type: GameTypes.AskingAndJoining | GameTypes.Trull) { }

    static fromJSON(entry: any): GameResult {
        if (typeof entry.player1 !== 'number' || entry.player1 < 1 || entry.player1 > 4) {
            throw new SyntaxError('AskingAndJoiningResult: invalid player1');
        }
        if (typeof entry.player2 !== 'number' || entry.player2 < 1 || entry.player2 > 4) {
            throw new SyntaxError('AskingAndJoiningResult: invalid player2');
        }
        if (typeof entry.tricks !== 'number') {
            throw new SyntaxError('AskingAndJoiningResult: invalid tricks');
        }
        if (![GameTypes.AskingAndJoining, GameTypes.Trull].includes(entry.type)) {
            throw new SyntaxError('AskingAndJoiningResult: invalid type');
        }
        return new AskingAndJoiningResult(entry.player1, entry.player2, entry.tricks, entry.type);
    }

    public toJSON(): any {
        return { type: this.type, player1: this.player1, player2: this.player2, tricks: this.tricks };
    }
}

export class AloneResult implements GameResult {
    public type = GameTypes.Alone;
    constructor(public player: number,
        public tricks: number) { }

    static fromJSON(entry: any): GameResult {
        if (typeof entry.player !== 'number' || entry.player < 1 || entry.player > 4) {
            throw new SyntaxError('AloneResult: invalid player');
        }
        if (typeof entry.tricks !== 'number') {
            throw new SyntaxError('AloneResult: invalid tricks');
        }
        return new AloneResult(entry.player, entry.tricks);
    }

    public toJSON(): any {
        return { type: this.type, player: this.player, tricks: this.tricks };
    }
}


export class MiseryResult implements GameResult {
    constructor(public playerActions: PlayerActionEnum[],
        public type: GameTypes) { }

    static fromJSON(entry: any): GameResult {
        if (!Array.isArray(entry.playerActions) || entry.playerActions.length !== 4) {
            throw new SyntaxError('MiseryResult: invalid playerActions');
        }
        const validActions = Object.values(PlayerActionEnum);
        if (!entry.playerActions.every((action: any) => validActions.includes(action))) {
            throw new SyntaxError('MiseryResult: invalid playerAction value');
        }
        if (![GameTypes.Misery, GameTypes.OpenMisery].includes(entry.type)) {
            throw new SyntaxError('MiseryResult: invalid type');
        }
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