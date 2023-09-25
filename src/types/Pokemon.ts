export type Pokemon = {
    id: number;
    sprites: string[];
    name: string;
    number: number;
    types: string[];
    attacks: {
        fast: string[];
        special: string[];
    };
    };