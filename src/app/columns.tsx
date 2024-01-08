"use client";

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown} from "lucide-react"

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
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nazwa
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "type",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Typ
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Data Utworzenia
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell:({row}) =>{
        const date = new Date(row.getValue("date"))
        const formatted = date.toLocaleTimeString("pl-PL")+" "+date.toLocaleDateString("pl-PL")
        return <div className="font-medium">{formatted}</div>
      },
    }
    ,
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
          cell: ({ row }) => {
            const station = row.original
            const status = station.status
    
            if(status === "OK"){
                return (
                <div className={`rounded bg-green-600 text-white w-fit paddin p-3 text-center`} >
                    {status}
                </div>
            )
        }else{
            return (
                <div className={`rounded bg-red-600 text-white w-fit paddin p-3 text-center`} >
                    {status}
                </div>
            )
        }
        },
    },
  ]