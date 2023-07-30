import { faker } from '@faker-js/faker'

export type Defect = {
	defectNumber: number
	defectTitle: string
	assetName: string
	assetOwner: string
	task: number,
	createdByUser: string,
	createdByCompany: string
}

const range = (len: number) => {
	const arr = []
	for (let i = 0; i < len; i++) {
		arr.push(i)
	}
	return arr
}

const newDefect = (): Defect => {
	return {
		defectNumber: faker.number.int(5),
		defectTitle: faker.commerce.productDescription(),
		assetName: faker.commerce.productName(),
		assetOwner: faker.company.name(),
		task: faker.number.int(10),
		createdByUser: faker.person.firstName(),
		createdByCompany: faker.company.name()
	}
}

export function makeData(...lens: number[]) {
	const makeDataLevel = (depth = 0): Defect[] => {
		const len = lens[depth]!
		return range(len).map(() => {
			return {
				...newDefect(),
				subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
			}
		})
	}

	return makeDataLevel()
}