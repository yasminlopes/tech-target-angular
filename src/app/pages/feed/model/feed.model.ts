export interface Feed {
  id: number;
  user_cnpj_owner: number;
  post_title: string;
  post_description: string;
  post_picture: null;
  post_date: string
}

export interface Reactions extends Feed {
  id: number;
  reaction_date: string
  post: number
  user_reacting: number
  reaction: number
}