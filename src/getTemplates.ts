type Column = {
	header: string;
	accessorKey: string
}

export type Template = {
	id: number;
	name: string;
	columns: Column[]
}

export async function getTemplates():Promise<Template[]> {
	return [
		{
			id: 1,
			name: "Template 1",
			columns: [
				{
					accessorKey: "defectNumber",
					header: "Defect Number"
				},
				{
					accessorKey: "defectTitle",
					header: "Defect Title"
				},
				{
					accessorKey: "assetName",
					header: "Asset Name"
				},
				{
					accessorKey: "assetOwner",
					header: "Asset Owner"
				},
				{
					accessorKey: "task",
					header: "Task"
				}]
		},
		{
			id: 2,
			name: "Template 2",
			columns: [
				{
					accessorKey: "defectNumber",
					header: "Defect Number"
				},
				{
					accessorKey: "defectTitle",
					header: "Defect Title"
				},
				{
					accessorKey: "assetName",
					header: "Asset Name"
				},
				{
					accessorKey: "createdByUser",
					header: "Created by User"
				},
				{
					accessorKey: "createdByCompany",
					header: "Created by Company"
				}]
		},
		{
			id: 3,
			name: "Template 3",
			columns: [
				{
					accessorKey: "defectNumber",
					header: "Defect Number"
				},
				{
					accessorKey: "defectTitle",
					header: "Defect Title"
				},
				{
					accessorKey: "assetName",
					header: "Asset Name"
				}]
		},
		{
			id: 4,
			name: "Template 4",
			columns: [
				{
					accessorKey: "defectTitle",
					header: "Defect Title"
				},
				{
					accessorKey: "assetName",
					header: "Asset Name"
				},
				{
					accessorKey: "createdByUser",
					header: "Created by User"
				},
				{
					accessorKey: "createdByCompany",
					header: "Created by Company"
				}]
		},
	];
}