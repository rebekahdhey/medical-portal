import { useState } from 'react'
import type { Role } from './types/role'
import DoctorView from './components/DoctorView'
import PatientView from './components/PatientView'
import Topbar from './components/Topbar'

function App() {
  const [role, setRole] = useState<Role>('patient')

  return (
    <div className="min-h-screen">
      <Topbar role={role} onRoleChange={setRole} />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {role === 'patient' ? <PatientView /> : <DoctorView />}
      </main>
    </div>
  )
}

export default App