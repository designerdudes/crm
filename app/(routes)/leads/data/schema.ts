import { z } from "zod"

export const leadsSchema = z.object({
  id: z.string(),
  name: z.string(),
  title: z.string(),
  company: z.string(),
  phone: z.string(),
  email: z.string(),
  leadStatus: z.string(),
  ownerAlias: z.string(),
})

export type Lead = z.infer<typeof leadsSchema>
