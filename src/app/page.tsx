"use client"

import { useState } from 'react'
import MainWallet from './mainwallet'
import Generator from './generator'
import Distributor from './distributor'
import Pump from './pump'
import Header from '@/components/header'
import { Tabs, Tab } from "@heroui/react"

export default function Page() {
  const [selected, setSelected] = useState('main')

  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <Tabs 
          selectedKey={selected} 
          onSelectionChange={setSelected as any}
          className="mt-4"
          size="sm"
          variant="underlined"
        >
          <Tab key="main" title="Main Wallet">
            <MainWallet />
          </Tab>
          <Tab key="generator" title="Generator">
            <Generator />
          </Tab>
          <Tab key="distributor" title="Distributor">
            <Distributor />
          </Tab>
          <Tab key="pump" title="Pump">
            <Pump />
          </Tab>
        </Tabs>
      </main>
    </>
  )
}