import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { services } from '../data/services'
import { contactSchema } from '../utils/validation'
import { whatsappUrl } from '../utils/whatsapp'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', phone: '', service: '', message: '' },
  })

  const onSubmit = (data) => {
    const message = `Hello Shonalika Parlour, my name is ${data.name}. Phone: ${data.phone}. I am interested in ${data.service}. ${data.message}`
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    toast.success('Opening WhatsApp with your enquiry.')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card grid gap-4 p-5 sm:p-6">
      <div>
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" className="form-field" {...register('name')} autoComplete="name" />
        {errors.name && <p className="form-error">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input id="phone" className="form-field" {...register('phone')} autoComplete="tel" />
        {errors.phone && <p className="form-error">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="service" className="form-label">Service Interested In</label>
        <select id="service" className="form-field" {...register('service')}>
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.title} value={service.title}>{service.title}</option>
          ))}
          <option value="Basic Beautician Course">Basic Beautician Course</option>
          <option value="Advanced Beautician Course">Advanced Beautician Course</option>
        </select>
        {errors.service && <p className="form-error">{errors.service.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="form-label">Message</label>
        <textarea id="message" className="form-field min-h-32 resize-y" {...register('message')} />
        {errors.message && <p className="form-error">{errors.message.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary w-full">Send Enquiry on WhatsApp</button>
    </form>
  )
}
