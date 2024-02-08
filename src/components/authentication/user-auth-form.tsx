"use client";

import * as React from "react";
import { useRouter, usePathname } from 'next/navigation';
import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { toast } from "sonner"; // Assuming this is the correct import for your toast library
import axiosClient from "@/utils/axiosClient";

import { cn, catchClerkError } from "@/lib/utils";
import { signInSchema, signUpSchema } from "@/lib/validations/auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/password-input";
import { OAuthSignIn } from "./oauth-signin";
import useAuth from "@/hooks/useAuth";

type Inputs = z.infer<typeof signUpSchema> | z.infer<typeof signInSchema>;
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { signUp, login, isLoading } = useAuth();
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<Inputs>({
    resolver: zodResolver(pathname === "/signup" ? signUpSchema : signInSchema)
  });

  async function onSubmit(user: Inputs) {
    if (isLoading) return;

    startTransition(async () => {
      try {
        let result;
        if (pathname === "/signup") {
          result = await signUp({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
          });
        } else {
          result = await login({
            email: user.email,
            password: user.password,
          });
        }

        if (result.payload.status === 201) {
          router.push("/login");
        } else if (result.payload.status === 200) {
          localStorage.setItem("tokens", JSON.stringify(result.payload.data.tokens))
          router.push("/dashboard");
        }
      } catch (err: any) {
        if (err?.message) {
          toast.error(err?.message);
        } else {
          toast.error(err.response.data.error);
        }
      }
    });
  }


  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form
          className="grid gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid gap-2">
            {pathname === "/signup" &&
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Firstname</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Rodney"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-1">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Lastname</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Mullen"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            }
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="rodneymullen180@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="**********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {pathname === "/signup" &&
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="**********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            }
            <Button type="submit" variant="outline" disabled={isPending} className=" mt-2">
              {isPending && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              {pathname === "/signup" ? "Create Account" : "Sign in"}
              <span className="sr-only">
                {pathname === "/signup" ? "Create Account" : "Sign in"}
              </span>
            </Button>
          </div>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="w-full">
        <OAuthSignIn />
      </div>
    </div>
  );
}

export default UserAuthForm;
