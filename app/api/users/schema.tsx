import { z } from "zod"

const schema = z.object({
    name: z.string().min(3).max(30)
})

export default schema