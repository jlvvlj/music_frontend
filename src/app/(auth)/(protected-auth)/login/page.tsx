import { type Metadata } from "next";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OAuthSignIn } from "@/components/authentication/oauth-signin";
import { Shell } from "@/components/shells/shell";
import UserAuthForm from "@/components/authentication/user-auth-form";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "localhost:3000"),
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <Shell className="max-w-lg">
      <Card>
        <CardContent className="grid gap-4">
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  SignIn an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </div>
              <UserAuthForm />
              <p className="px-8 text-center text-sm text-muted-foreground">Not Registered Yet? <Link href="/signup" className="underline underline-offset-4 hover:text-primary">Create an account</Link></p>
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
        </CardFooter>
      </Card>
    </Shell>
  );
}
