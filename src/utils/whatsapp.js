import { business } from '../data/business'

export const whatsappUrl = (message) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`

export const serviceMessage = (serviceName) =>
  `Hello Shonalika Parlour, I would like to book ${serviceName}.`
