import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter at least 2 characters.'),
  phone: z.string().regex(/^(\+91[-\s]?)?[6-9]\d{9}$/, 'Enter a valid Indian phone number.'),
  service: z.string().min(1, 'Please choose a service.'),
  message: z.string().min(10, 'Please enter at least 10 characters.'),
})
