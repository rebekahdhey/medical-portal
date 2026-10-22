import { Stethoscope, UserRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Role } from '../types/role'

type RoleSwitchProps = {
  role: Role
  onChange: (role: Role) => void
}

const options: { id: Role; label: string; icon: LucideIcon }[] = [
  { id: 'patient', label: 'Patient', icon: UserRound },
  { id: 'doctor', label: 'Doctor', icon: Stethoscope },
]

function RoleSwitch({ role, onChange }: RoleSwitchProps) {
  return (
    <div className="flex rounded-full bg-slate-100 p-1" role="group" aria-label="Switch view">
      {options.map((option) => {
        const Icon = option.icon
        const isActive = option.id === role

        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            aria-pressed={isActive}
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold transition ${
              isActive ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Icon className="h-4 w-4" />
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default RoleSwitch