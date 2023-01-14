import NextAuth from 'next-auth';
import GoogleProfile from 'next-auth/providers/google';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProfile({
      clientId: process.env.ID,
      clientSecret: process.env.SECRET,
    }),
    // ...add more providers here
  ],
  debug: true
}
export default NextAuth(authOptions)