import type { NextAuthConfig } from 'next-auth';
 
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: 'auth/login',
    newUser: 'auth/new-account',
  },
  // para estos providers podemos usar appleId, google, facebook, etc, los que soporte basicamente
  providers: [],
};