// import { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import  { NextAuthOptions } from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: String(process.env.GITHUB_ID),
            clientSecret: String(process.env.GITHUB_SECRET),
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'jetqin'},
                password: { label: 'Password', type: 'password'},
                username: { label: 'Username', type: 'text', placeholder: 'jetqin'},
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Please enter an email and password!')
                }
                const user = { id: 1, name: 'Jet Qin', email: 'qinjet@gmail.com'}
                return user;
            }
        })
    ],
    secret:  process.env.SECRET,
    session: {
        strategy: 'jwt',
    },
    debug: process.env.NODE_ENV === 'development'
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }