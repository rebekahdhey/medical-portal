import { HeartPulse } from 'lucide-react'
import type { Role } from '../types/role'
import RoleSwitch from './RoleSwitch'

type TopbarProps = {
  role: Role
  onRoleChange: (role: Role) => void
}

function Topbar({ role, onRoleChange }: TopbarProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-teal-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600">
            <HeartPulse className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-slate-800">CareLink</span>
        </div>

        <RoleSwitch role={role} onChange={onRoleChange} />
      </div>
    </header>
  )
}

export default Topbar