import type { Doctor } from '../types/clinic'

import doctor1 from '../assets/images/doctor1.jpg'
import doctor2 from '../assets/images/doctor2.jpg'
import doctor3 from '../assets/images/doctor3.jpg'

export const doctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Elena Cruz',
    specialty: 'General Practice',
    bio: 'Check-ups, everyday concerns, and long-term care.',
    image: doctor1,
  },
  {
    id: 'd2',
    name: 'Dr. Marcus Reyes',
    specialty: 'Dermatology',
    bio: 'Skin, hair, and nail care for all ages.',
    image: doctor2,
  },
  {
    id: 'd3',
    name: 'Dr. Priya Nair',
    specialty: 'Pediatrics',
    bio: 'Friendly, gentle care for children and teens.',
    image: doctor3,
  },
]