import NextAuth, {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {getTokenWithEmail} from "../../../lib/api/auth";

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

                    return {name: "test", email: credentials?.email, id: "test"}

                } else {

                    throw new Error(res?.message || "credential try not successfully")

                }
            }
        })
    ],
    pages: {
        signIn: "/login-register",
        error: "/login-register"
    }
}

export default NextAuth(authOptions);