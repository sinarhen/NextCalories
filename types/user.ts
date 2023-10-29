export type Account = {
  id: string;
  userId: string;
  provider: string;
  providerAccountId: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export type Session = {
  id: string;
  userId: string;
  expires: string;
  sessionToken: string;
  accessToken: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  emailVerified?: string | null;
  image: string;
  createdAt: string;
  updatedAt: string;
  accounts: Account[];
  sessions: Session[];
  favoriteRecipes: string[];
  favoriteProducts: string[];
}
