// "use client";

// import * as React from "react";
// import { useRouter, usePathname } from 'next/navigation';
// import { useSignIn } from "@clerk/nextjs";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import type { z } from "zod";

// import { cn, catchClerkError } from "@/lib/utils";
// import { signInSchema, signUpSchema } from "@/lib/validations/auth";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Icons } from "@/components/ui/icons";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { PasswordInput } from "@/components/password-input";
// import { OAuthSignIn } from "./oauth-signin";

// type Inputs = z.infer<typeof signUpSchema> | z.infer<typeof signInSchema>;
// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

// const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const { isLoaded, signIn, setActive } = useSignIn();
//   const [isPending, startTransition] = React.useTransition();

//   // react-hook-form
//   const form = useForm<Inputs>({
//     resolver: zodResolver(pathname === "/signup" ? signUpSchema : signInSchema)
//   });

//   function onSubmit(data: Inputs) {
//     if (!isLoaded) return;

//     startTransition(async () => {
//       try {
//         const result = await signIn.create({
//           identifier: data.email,
//           password: data.password,
//         });

//         if (result.status === "complete") {
//           await setActive({ session: result.createdSessionId });

//           router.push(`${window.location.origin}/dashboard`);
//         } else {
//           /*Investigate why the login hasn't completed */
//           console.log(result);
//         }
//       } catch (err) {
//         catchClerkError(err);
//       }
//     });
//   }

//   return (
//     <div className={cn("grid gap-6", className)} {...props}>
//       <Form {...form}>
//         <form
//           className="grid gap-4"
//           onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
//         >
//           <div className="grid gap-2">
//             {pathname === "/signup" && 
//             <div className="grid grid-cols-2 gap-4">
//               <div className="grid gap-1">
//                 <FormField
//                   control={form.control}
//                   name="firstname"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Firstname</FormLabel>
//                       <FormControl>
//                         <Input
//                           type="text"
//                           placeholder="Rodney"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <div className="grid gap-1">
//                 <FormField
//                   control={form.control}
//                   name="lastname"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Lastname</FormLabel>
//                       <FormControl>
//                         <Input
//                           type="text"
//                           placeholder="Mullen"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//             </div>
//             }
//             <div className="grid gap-1">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="text"
//                         placeholder="rodneymullen180@gmail.com"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="grid gap-1">
//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Password</FormLabel>
//                     <FormControl>
//                       <PasswordInput placeholder="**********" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             {pathname === "/signup" &&
//               <div className="grid gap-1">
//                 <FormField
//                   control={form.control}
//                   name="confirmPassword"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Confirm password</FormLabel>
//                       <FormControl>
//                         <PasswordInput placeholder="**********" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//             }
//             <Button type="submit" variant="outline" disabled={isPending} className=" mt-2">
//               {isPending && (
//                 <Icons.spinner
//                   className="mr-2 h-4 w-4 animate-spin"
//                   aria-hidden="true"
//                 />
//               )}
//               {pathname === "/signup" ? "Create Account" : "Sign in"}
//               <span className="sr-only">
//                 {pathname === "/signup" ? "Create Account" : "Sign in"}
//               </span>
//             </Button>
//           </div>
//         </form>
//       </Form>

//       <div className="relative">
//         <div className="absolute inset-0 flex items-center">
//           <span className="w-full border-t" />
//         </div>
//         <div className="relative flex justify-center text-xs uppercase">
//           <span className="bg-background px-2 text-muted-foreground">
//             Or continue with
//           </span>
//         </div>
//       </div>
//       <div className="w-full">
//         <OAuthSignIn />
//       </div>
//     </div>
//   );
// }


// export default UserAuthForm;


"use client";

import * as React from "react";
import { useRouter, usePathname } from 'next/navigation';
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { cn, catchClerkError } from "@/lib/utils";
import { signInSchema, signUpSchema, verifyCodeSchema } from "@/lib/validations/auth";
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
import useAuth from "../../hooks/useAuth";

type Inputs = z.infer<typeof signUpSchema> | z.infer<typeof signInSchema> | z.infer<typeof verifyCodeSchema>;
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { createUser, login } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();
  const { isLoaded: isSignupLoaded, signUp, setActive: setSignupActive } = useSignUp();
  const [isPending, startTransition] = React.useTransition();
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [userInformation, setUserInformation] = React.useState<{
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
  }>({});


  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(pathname === "/signup" ? pathname === "/signup" && pendingVerification ? verifyCodeSchema : signUpSchema : signInSchema)
  });

  function onSubmit(data: Inputs) {
    if (!isLoaded || !isSignupLoaded) return;

    startTransition(async () => {
      try {
        let result;
        if (pathname === "/signup") {
          await signUp.create({
            emailAddress: data.email,
            password: data.password,

          });
          result = await signUp.prepareEmailAddressVerification({
            strategy: 'email_code'
          });
          setUserInformation(data)
          setPendingVerification(true);
        }
        else {
          result = await signIn.create({
            identifier: data.email,
            password: data.password,
          });
          await login({ email: data.email, password: data.password })
        }

        if (result.status === "complete") {

          await setActive({ session: result.createdSessionId });
        }
      } catch (err) {
        catchClerkError(err);
      }
    });
  }

  const onPressVerify = async (data: any) => {
    if (!isSignupLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: data?.code,
      });

      if (completeSignUp.status === "complete") {
        await createUser({ firstName: userInformation.firstName, lastName: userInformation.lastName, email: userInformation.email, password: userInformation.password, clerkUserId: completeSignUp?.createdUserId })
        await setSignupActive({ session: completeSignUp.createdSessionId });
        setUserInformation({})
        router.push(`${window.location.origin}/dashboard`);
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form
          className="grid gap-4"
          onSubmit={(...args) => pendingVerification ? void form.handleSubmit(onPressVerify)(...args) : void form.handleSubmit(onSubmit)(...args)}
        >
          <div className="grid gap-2">
            {
              pendingVerification ?
                <div className="grid gap-1">
                  <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Code</FormLabel>
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
                :
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
                </div>
            }
            <Button type="submit" variant="outline" disabled={isPending} className=" mt-2">
              {isPending && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              {pathname === "/signup" ? pathname === "/signup" && pendingVerification ? "Verify" : "Create Account" : "Sign in"}
              <span className="sr-only">
                {pathname === "/signup" ? pathname === "/signup" && pendingVerification ? "Verify" : "Create Account" : "Sign in"}
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
    </div >
  );
}


export default UserAuthForm;