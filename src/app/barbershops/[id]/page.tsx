import { db } from '@/lib/prisma'
import { BarbershopInfo } from './components/barbershop-info'
import { ServiceItem } from './components/service-item'

interface BarbershopDetailsPageProps {
  params: {
    id?: string
  }
}

export default async function BarbershopDetailsPage({
  params,
}: BarbershopDetailsPageProps) {
  if (!params.id) {
    // TODO: redirecionar para home page
    return null
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    // TODO: redirecionar para home page
    return null
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="flex flex-col gap-4 px-5 py-6">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}
