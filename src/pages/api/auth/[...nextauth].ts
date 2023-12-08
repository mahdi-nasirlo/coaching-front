import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {getTokenWithEmail} from "../../../lib/api/auth";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "email", type: "email", placeholder: "jsmith", value: "m.nwordpress1223@gmail.com"},
                password: {label: "Password", type: "password"}
            },
            authorize: async (credentials) => {

                const res = await getTokenWithEmail({
                    data:
                        {
                            email: `${credentials?.email}`,
                            password: `${credentials?.password}`,
                        },
                })

                console.log(res)

                return false
            }
        })
    ]
});