"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { cn, catchClerkError } from "@/lib/utils";
import { authSchema } from "@/lib/validations/auth";
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
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/password-input";
import { OAuthSignIn } from "./oauth-signin";

type Inputs = z.infer<typeof authSchema>;
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    startTransition(async () => {
      try {
        const result = await signIn.create({
          identifier: data.email,
          password: data.password,
        });

        if (result.status === "complete") {
          await setActive({ session: result.createdSessionId });

          router.push(`${window.location.origin}/dashboard`);
        } else {
          /*Investigate why the login hasn't completed */
          console.log(result);
        }
      } catch (err) {
        catchClerkError(err);
      }
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form
          className="grid gap-4"
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <div className="grid gap-2">
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
            <Button type="submit" variant="outline" disabled={isPending} className=" mt-2">
              {isPending && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              Sign in
              <span className="sr-only">Sign in</span>
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


