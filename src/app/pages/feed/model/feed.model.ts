export interface Feed {
  id: number;
  user_cnpj_owner: number;
  post_title: string;
  post_description: string;
  post_picture: null;
  post_date: string;
  user_owner: {
    corporate_name: string;
  },
  id_reaction: number;
}

export interface Reactions extends Feed {
  id: number;
  reaction_date: string;
  post: number;
  user_reacting: number;
  reaction: number;
}

export interface ReactionsType {
  id: number;
  reaction_name: string;
  slug_name: string;
}

export const REACTIONS_TYPE = [
  {
    id: 1,
    reaction_name: 'Love',
    slug_name: 'Love',
  },
  {
    id: 2,
    reaction_name: 'Like',
    slug_name: 'Like',
  },
  {
    id: 3,
    reaction_name: 'Dislike',
    slug_name: 'Dislike',
  },
];
