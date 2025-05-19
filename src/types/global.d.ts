/* 
  Extends the Express Request interface globally across the application 
  to include a custom `user` property of type `IUser`. 
  This allows for strong typing when accessing `req.user` in middleware and route handlers.
*/

interface IBlogLabel {
  title: string;
  color: string;
}

interface IBlog {
  _id: string;
  title: string;
  snippet: string;
  date: Date;
  img_url?: string;
  author: string;
  slug: string;
  read_time: number;
  label: IBlogLabel;
  comments: IComment[];
}

interface ITalk {
  _id: string;
  title: string;
  snippet: string;
  date: Date;
  username: string;
  upvote: number;
  downvote: number;
  content: string | null;
}

type Category = {
  id: number;
  path: string;
  label: string;
  color: string;
};

type Season = {
  label: string;
  value: string;
};

interface IUser {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  display_name: string | null;
  avatar_url: string;
  birth_date: Date | null;
  cover_img_url: string | null;
  reddit_url: string | null;
  x_url: string | null;
  mal_url: string | null;
  favorite_animes: IFavorite_Anime[] | null;
  blocked_users: Partial<IUser>[] | null;
  followers: Partial<IUser>[] | null;
  followings: Partial<IUser>[] | null;
  talks: ITalk[] | null;
  security_pin: number | null;
}

export { IBlog, ITalk, Category, Season, IBlogLabel, IBlog, IUser };
