// import React, { createContext, useContext, useEffect, useState } from "react";
// import { User, Session, AuthError } from "@supabase/supabase-js";
// import { createSupabaseClient as supabase } from "@/lib/supabase";
// import { toast } from "sonner"
// interface AuthContextType {
//     user: User | null;
//     session: Session | null;
//     loading: boolean;
//     signUp: (
//         email: string,
//         password: string,
//         fullName: string,
//     ) => Promise<{ error: AuthError | null }>;
//     signIn: (
//         email: string,
//         password: string,
//     ) => Promise<{ error: AuthError | null }>;
//     signInWithGoogle: () => Promise<{ error: AuthError | null }>;
//     signInWithFacebook: () => Promise<{ error: AuthError | null }>;
//     signOut: () => Promise<void>;
//     updateProfile: (fullName: string) => Promise<{ error: AuthError | null }>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }
//     return context;
// };

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
//     children,
// }) => {
//     const [user, setUser] = useState<User | null>(null);
//     const [session, setSession] = useState<Session | null>(null);
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         // Get initial session
//         supabase.auth.getSession().then(({ data: { session } }) => {
//             setSession(session);
//             setUser(session?.user ?? null);
//             setLoading(false);
//         });

//         // Listen for auth changes
//         const {
//             data: { subscription },
//         } = supabase.auth.onAuthStateChange((_event, session) => {
//             setSession(session);
//             setUser(session?.user ?? null);
//             setLoading(false);
//         });

//         return () => subscription.unsubscribe();
//     }, []);

//     const signUp = async (email: string, password: string, fullName: string) => {
//         const { error } = await supabase.auth.signUp({
//             email,
//             password,
//             options: {
//                 data: {
//                     full_name: fullName,
//                 },
//             },
//         });

//         if (error) {
//             toast("Sign Up Error", {
//                 description: 'something occured!'
//             }
//             );
//         } else {
//             toast(
//                 "Success!", {
//                 description: "Please check your email to confirm your account.",
//             });
//         }

//         return { error };
//     };

//     const signIn = async (email: string, password: string) => {
//         const { error } = await supabase.auth.signInWithPassword({
//             email,
//             password,
//         });

//         if (error) {
//             toast(
//                 "Sign In Error", {
//                 description: error.message,

//             });
//         } else {
//             toast(
//                 "Welcome back!", {
//                 description: "You have successfully signed in.",
//             });
//         }

//         return { error };
//     };

//     const signInWithGoogle = async () => {
//         const { error } = await supabase.auth.signInWithOAuth({
//             provider: "google",
//             options: {
//                 redirectTo: `/`,
//             },
//         });

//         return { error };
//     };

//     const signInWithFacebook = async () => {
//         const { error } = await supabase.auth.signInWithOAuth({
//             provider: "facebook",
//             options: {
//                 redirectTo: `${window.location.origin}/profile`,
//             },
//         });

//         return { error };
//     };

//     const signOut = async () => {
//         await supabase.auth.signOut();
//         toast(
//             "Signed out", {
//             description: "You have been successfully signed out.",
//         });
//     };

//     const updateProfile = async (fullName: string) => {
//         const { error } = await supabase.auth.updateUser({
//             data: { full_name: fullName },
//         });

//         if (error) {
//             toast(
//                 "Update Error", {
//                 description: error.message,
//             });
//         } else {
//             toast(
//                 "Profile Updated", {
//                 description: "Your profile has been successfully updated.",
//             });
//         }

//         return { error };
//     };

//     const value = {
//         user,
//         session,
//         loading,
//         signUp,
//         signIn,
//         signInWithGoogle,
//         signInWithFacebook,
//         signOut,
//         updateProfile,
//     };

//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
