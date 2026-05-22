import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { business } from '../data/business'
import { whatsappUrl } from '../utils/whatsapp'

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3">
      <a className="floating-btn bg-[#25D366] text-white" href={whatsappUrl('Hello Shonalika Parlour, I want to book an appointment.')} aria-label="Book on WhatsApp">
        <FaWhatsapp />
      </a>
      <a className="floating-btn bg-stone-950 text-white dark:bg-rose-200 dark:text-stone-950" href={`tel:${business.phone}`} aria-label="Call Shonalika">
        <FiPhone />
      </a>
    </div>
  )
}
