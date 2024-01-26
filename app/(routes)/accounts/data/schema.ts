import { z } from "zod"

export const accountsSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  ownerAlias: z.string(),
})

export type Account = z.infer<typeof accountsSchema>
