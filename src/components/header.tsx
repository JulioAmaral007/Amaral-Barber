'use client'

import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { SideMenu } from './side-menu'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}
