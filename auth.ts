import NextAuth from 'next-auth';
import prisma from './prisma/prisma';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  pages: {
    signIn: `${process.env.NEXT_PUBLIC_BASEPATH_URL}/login`,
  },
  providers: [
    github,
    google,
    CredentialsProvider({
      name: 'Sign in',
      id: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials:any) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

          ////////////////////////////////////////
        //LDAP
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let dataArray = new URLSearchParams();
        dataArray.append("User[clientId]", "lppsa");
        dataArray.append("User[grantType]", "password");
        dataArray.append("User[username]", credentials?.email);
        dataArray.append("User[password]", credentials?.password);

        let response = await fetch("http://ict.lppsa.gov.my/lppsa/oauth/token", {
          method: "POST",
          headers: myHeaders,
          body: dataArray,
        });
        let response2 = await response.json() ;
       
        if (!response2?.accessToken) {
          throw new Error("Failed to fetch user data from third-party API");
          return null;
        }else{
       
          let myHeaders = new Headers();
          myHeaders.append("Authorization", `Bearer ${response2.accessToken}`);
  
          let response:any = await fetch("http://ict.lppsa.gov.my/lppsa/oauth/getUser", {
            method: "GET",
            headers: myHeaders,
          });
          response = await response.json() ;

        
          if(response?.name){
            // console.log("successs",credentials.email, response?.name);
            // return null ;
            return {
              id: '1',
              email: `${credentials.email}@lppsa.gov.my`,
              name: response?.name,
              randomKey: 'Hey cool',
            };

          }else{
            return null;
          }
        }

        //LDAP
        ////////////////////////////////////////
        

        // const user = await prisma.user.findUnique({
        //   where: {
        //     email: String(credentials.email),
        //   },
        // });

        // if (
        //   !user ||
        //   !(await bcrypt.compare(String(credentials.password), user.password!))
        // ) {
        //   return null;
        // }

        // return {
        //   id: user.id,
        //   email: user.email,
        //   name: user.name,
        //   randomKey: 'Hey cool',
        // };
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const paths = ['/profile', '/client-side', '/dataupload'];
      const isProtected = paths.some((path) =>
        nextUrl.pathname.startsWith(path)
      );

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL(`${process.env.NEXT_PUBLIC_BASEPATH_URL}/api/auth/signin`, nextUrl.origin);
        redirectUrl.searchParams.append('callbackUrl', nextUrl.href);
        return Response.redirect(redirectUrl);
      }
      return true;
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
    session(params:any) {
      return {
        ...params.session,
        user: {
          ...params.session.user,
          id: params.token.id as string,
          randomKey: params.token.randomKey,
        },
      };
    },
  },
});
