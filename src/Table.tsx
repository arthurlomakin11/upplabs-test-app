import {
	useReactTable,
	getCoreRowModel,
	flexRender,
	RowData,
} from '@tanstack/react-table'
import {Defect} from './makeData';
import {Dispatch, SetStateAction} from "react";
import {defaultColumn} from "./defaultColumn";
import {Template} from "./getTemplates";

declare module '@tanstack/react-table' {
	interface TableMeta<TData extends RowData> {
		updateData: (rowIndex: number, columnId: string, value: unknown) => void
	}
}

export default function Table({ template, data, setData, refreshData }: { template:Template, data: Defect[], setData: Dispatch<SetStateAction<Defect[]>>, refreshData: Function }) {
	const columns = template.columns;

	const table = useReactTable({
		data,
		columns,
		defaultColumn,
		getCoreRowModel: getCoreRowModel(),
		meta: {
			updateData: (rowIndex, columnId, value) => {
				setData(old =>
					old.map((row, index) => {
						if (index === rowIndex) {
							return {
								...old[rowIndex]!,
								[columnId]: value,
							}
						}
						return row
					})
				)
			},
		}
	})

	return (
		<div className="p-2">
			<div className="h-2" />
			<table className="table">
				<thead>
				{table.getHeaderGroups().map(headerGroup => (
					<tr key={headerGroup.id}>
						{headerGroup.headers.map(header => {
							return (
								<th key={header.id} colSpan={header.colSpan}>
									{header.isPlaceholder ? null : (
										<div>
											{flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
										</div>
									)}
								</th>
							)
						})}
					</tr>
				))}
				</thead>
				<tbody>
				{table.getRowModel().rows.map(row => {
					return (
						<tr key={row.id}>
							{row.getVisibleCells().map(cell => {
								return (
									<td key={cell.id} className="cell">
										{flexRender(
											cell.column.columnDef.cell,
											cell.getContext()
										)}
									</td>
								)
							})}
						</tr>
					)
				})}
				</tbody>
			</table>
			<div className="h-2" />
			<div>
				<button onClick={() => refreshData()}>Refresh Data</button>
			</div>
		</div>
	)
}