import React, {useEffect, useState} from "react";
import {getTemplates, Template} from "./getTemplates";
import {Defect, makeData} from "./makeData";
import Table from "./Table";

export const App = () => {
	const [templates, setTemplates] = useState<Template[]>([]);
	const [selectedTabId, setSelectedTabId] = useState(0);
	const [data, setData] = useState<Defect[]>([]);
	const refreshData = () => setData(() => makeData(100));

	useEffect(() => {
		getTemplates().then(list => {
			setTemplates(list);
			setSelectedTabId(list[0].id);
		});

		refreshData();
	},[])

	const selectedTemplate = templates.find(template => template.id == selectedTabId)!;

	return selectedTabId !== 0 ? <>
		{
			templates.map(template => {
				return <button key={template.id} onClick={() => setSelectedTabId(template.id)}>{template.name}</button>
			})
		}
		<Table template={selectedTemplate} data={data!} setData={setData} refreshData={refreshData}/>
	</> : <></>
}