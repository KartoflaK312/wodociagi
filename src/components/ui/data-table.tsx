"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select" 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  
}

export function DataTable<TData, TValue>({
  columns,
  data,
  selectedColumn,
  setSelectedColumn
}: DataTableProps<TData, TValue> & { selectedColumn: string, setSelectedColumn: Function }) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
  )
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,  
      columnFilters,
  },})
  
  return (
    <div>
      <div className="flex items-center py-4 mr-4">
            <Select onValueChange={(val) => setSelectedColumn(val)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Nazwa Stacji" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="nazwa">Nazwa Stacji</SelectItem>
                <SelectItem value="typ">Rodzaj</SelectItem>
                <SelectItem value="dacie">Data Utworzenia</SelectItem>
                <SelectItem value="status">Status</SelectItem>
            </SelectContent>
            </Select>
        </div>
      <div className="flex items-center py-4 mt-[30px] ml-[50px]">
        <Input
          placeholder={'Filtruj po ' + selectedColumn + '...'}
          value={(table.getColumn(selectedColumn)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(selectedColumn)?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
    <div className="rounded-md border w-[90vw] mx-[10px] mb-[50px] ">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Brak wyniku
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    </div>
  )
}
