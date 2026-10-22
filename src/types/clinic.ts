export type DoctorId = 'd1' | 'd2' | 'd3'

export type Doctor = {
  id: DoctorId
  name: string
  specialty: string
  bio: string
  image: string
}

export type AppointmentStatus = 'pending' | 'confirmed' | 'declined' | 'cancelled' | 'completed'

export type Appointment = {
  id: string
  doctorId: DoctorId
  patientName: string
  date: string // 'YYYY-MM-DD'
  time: string // 'HH:MM' in 24-hour time
  reason: string
  status: AppointmentStatus
  note?: string // the doctor's visit note, added later
}