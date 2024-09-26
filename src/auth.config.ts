// 'use client'

import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { z } from 'zod';
import prisma from './lib/prisma';

import bcryptjs from 'bcryptjs'

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: 'auth/login',
    newUser: 'auth/new-account',
  },
  // para estos providers podemos usar appleId, google, facebook, etc, los que soporte basicamente
  providers: [

    Credentials({
      async authorize(credentials) {

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(5) })
          .safeParse(credentials);


        //Este apartado nos indica si es valido pasar o no la contrasena o el password
        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;


        // buscar correo

        const user = await prisma.user.findUnique({ where: { email: email.toLocaleLowerCase() } });

        if (!user) return null;

        if (!bcryptjs.compareSync(password, user.password)) return null;

        // regresar el usuario sin el password
        const { password: _, ...rest} = user;

        console.log({rest})

        return rest;
      },
    }),

  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);