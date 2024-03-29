"use client"
import { DataTable } from "@/components/ui/data-table"
import Flow from './flow'
import {columns} from "./columns"
import {Graph} from "./graph"
import data from "./data.json"
import { useState } from "react"



export default function Home() {
  const [selectedColumn, setSelectedColumn] = useState("nazwa")
  return (
    <main>
      <h1 className="w-100vw text-[70px] text-center shadow font-sherif">Wodociągi</h1>
      <section className="flex items-center w-full flex-col justify-center">
      <Flow />
      <Graph />
      <DataTable columns={columns} data={data} selectedColumn={selectedColumn}setSelectedColumn={setSelectedColumn}/>
      </section>
      
    </main>
  )
}
