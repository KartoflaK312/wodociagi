"use client";
import { MoreHorizontal } from "lucide-react"
import { ColumnDef } from "@tanstack/react-table"
export type Station = {
    id: string
    name: string
    type: string
    date:string
    status: string
    
  }
  
  export const columns: ColumnDef<Station>[] = [
    {
      accessorKey: "name",
      header: "Nazwa",
    },
    {
      accessorKey: "type",
      header: "Typ",
    },
    {
      accessorKey: "date",
      header: "Data utworzenia",
      cell:({row}) =>{
        const date = new Date(row.getValue("date"))
        const formatted = date.toLocaleTimeString("pl-PL")+" "+date.toLocaleDateString("pl-PL")
        return <div className="font-medium">{formatted}</div>
      }
    },
    {
        accessorKey: "status",
        header: "Status",
    }
  ]