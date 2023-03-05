export interface Pokemon {
  id: number;
  name: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

