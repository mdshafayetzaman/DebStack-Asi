import { use } from 'react'
import type { Technology } from '../../type'
import TeachCards from './TeachCards'

interface TechnologyProps {
  teachPromise: Promise<Technology[]>
  handleAdd: (tech: Technology) => void
}

const TeachCard = ({ teachPromise, handleAdd }: TechnologyProps) => {
  const tech = use(teachPromise)

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {tech.map((card) => (
        <TeachCards key={card.id} teachPromise={card} handleAdd={handleAdd} />
      ))}
    </div>
  )
}

export default TeachCard
