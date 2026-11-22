export default function SchoolBus() {
  return (
    <g className="school-bus-body">
      <path d="M14 10h49c7 0 12 5 12 12v21H9V17c0-4 2-7 5-7Z" fill="#FFD45C" stroke="#3B8FC2" strokeWidth="3" />
      <path d="M11 35h62v10H11z" fill="#6BB5E3" stroke="#3B8FC2" strokeWidth="3" />
      <path d="M20 16h16v13H17V19c0-2 1-3 3-3Zm21 0h19c3 0 5 2 5 5v8H41z" fill="#EAF8FF" stroke="#3B8FC2" strokeWidth="2.5" />
      <path d="M4 32h7v8H4zM76 32h9v8h-9z" fill="#FFFDF8" stroke="#3B8FC2" strokeWidth="2.5" />
      <circle className="school-bus-wheel" cx="25" cy="46" r="7" fill="#30465A" stroke="#FFFDF8" strokeWidth="2.5" />
      <circle className="school-bus-wheel" cx="61" cy="46" r="7" fill="#30465A" stroke="#FFFDF8" strokeWidth="2.5" />
      <circle cx="25" cy="46" r="2" fill="#DDF1FF" />
      <circle cx="61" cy="46" r="2" fill="#DDF1FF" />
    </g>
  )
}
