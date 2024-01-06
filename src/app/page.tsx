import { DataTable } from "@/components/ui/data-table"
import Flow from './flow'
import {Station,columns} from "./columns"
import data from "./data.json"

export default function Home() {
  return (
    <main>
      <h1>Wodociągi</h1>
      <Flow></Flow>
      <DataTable columns={columns} data={data} />
    </main>
  )
}
