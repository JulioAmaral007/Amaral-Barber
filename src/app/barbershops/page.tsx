import { Header } from '@/components/header'
import { db } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { BarbershopItem } from '../(home)/components/barbershop-item'
import { Search } from '../(home)/components/search'

interface BarbershopsPageProps {
  searchParams: {
    search?: string
  }
}

export default async function BarbershopsPage({
  searchParams,
}: BarbershopsPageProps) {
  if (!searchParams.search) {
    return redirect('/')
  }

  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: 'insensitive',
      },
    },
  })

  return (
    <>
      <Header />

      <div className="flex flex-col gap-6 px-5 py-6">
        <Search
          defaultValues={{
            search: searchParams.search,
          }}
        />

        <h1 className="text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams.search}&quot;
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <div key={barbershop.id} className="w-full">
              <BarbershopItem barbershop={barbershop} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
