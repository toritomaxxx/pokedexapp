export type Pokemon = {
    sprites: string[];
    name: string;
    number: number;
    types: string[];
    attacks: {
        fast: string[];
        special: string[];
    };
    };