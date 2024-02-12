import * as z from "zod";

export const verifyCodeSchema = z
  .object({
    code: z
      .string({
        required_error: "Code is required",
      })
      .min(1, { message: "Code is required" })
      .max(6, { message: "Code is required" }),
  });

export const signUpSchema = z
  .object({
    firstName: z
      .string({
        required_error: "FirstName is required",
      })
      .min(1, { message: "FirstName is required" }),
    lastName: z
      .string({
        required_error: "LastName is required",
      })
      .min(1, { message: "LastName is required" }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({ message: "Please enter a valid email address" })
      .min(1, { message: "Email is required" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(100),
    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
      })
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100),
  // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
  //   message:
  //     "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
  // }),
});

export const verifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: "Verification code must be 6 characters long",
    })
    .max(6),
});

export const checkEmailSchema = z.object({
  email: signInSchema.shape.email,
});

export const resetPasswordSchema = z
  .object({
    password: signInSchema.shape.password,
    confirmPassword: signInSchema.shape.password,
    code: verifyEmailSchema.shape.code,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const userPrivateMetadataSchema = z.object({
  role: z.enum(["user", "admin", "super_admin"]),
  stripePriceId: z.string().optional().nullable(),
  stripeSubscriptionId: z.string().optional().nullable(),
  stripeCustomerId: z.string().optional().nullable(),
  stripeCurrentPeriodEnd: z.string().optional().nullable(),
});
