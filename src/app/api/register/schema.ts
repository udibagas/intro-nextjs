import { z } from "zod";

export const schema = z.object({
  name: z.string().min(3, "Minimum name length is 3 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Minimum password length is 8 characters"),
});
