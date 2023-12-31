import NextAuth, {AuthOptions, User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {getTokenWithEmail} from "../../../lib/api/auth";
import {AdapterUser} from "next-auth/adapters";
import {JWT} from "next-auth/jwt";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "email", type: "email", placeholder: "jsmith", value: "m.nwordpress1223@gmail.com"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {

                const res = await getTokenWithEmail({
                    data:
                        {
                            email: `${credentials?.email}`,
                            password: `${credentials?.password}`,
                        },
                })

                if (res?.data?.token) {

                    return {name: "test", email: credentials?.email, id: "test", accessToken: res?.data?.token}

                } else {

                    throw new Error(res?.message || "credential try not successfully")

                }
            }
        })
    ],
    callbacks: {
        jwt: ({user, token}: {
            user: User | (AdapterUser & { accessToken?: string, token_type?: string }),
            token: JWT
        }) => {

            if (user && 'accessToken' in user && user.accessToken) {

                return {
                    ...token,
                    accessToken: `${user.accessToken}`
                };
            }

            return token;
        },
        session: ({session, token}) => {

            if (token && token.accessToken) {
               
                return {
                    accessToken: token.accessToken,
                    ...session
                }
            }

            return session
        }
    },
    pages: {
        signIn: "/login-register",
        error: "/login-register"
    }
}

export default NextAuth(authOptions);