import { z } from 'zod';

// Validation Schema
const authFormSchema = z.object({
  name: z.string().optional(),
  password: z.string().min(8, "Password must be more than 8.").max(29, "Password must be less than 30 characters.").regex(/[a-zA-Z0-9]/, "Can only contain latin characters."),
  email: z.string().email("Please provide a valid email."),
});

type TAuthFormSchema = z.infer<typeof authFormSchema>

export {authFormSchema}
export type {TAuthFormSchema};


const editFormSchema = z.object({
  name: z.string(),
});

type TEditFormSchema = z.infer<typeof authFormSchema>

export {editFormSchema}
export type {TEditFormSchema};


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
