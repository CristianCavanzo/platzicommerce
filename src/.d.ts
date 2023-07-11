// export interface Products {
// 	id: number;
// 	title: string;
// 	price: number;
// 	description: string;
// 	category: Category;
// 	images: string[];
// }
export interface Products {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

export interface Category {
	id: number;
	name: string;
	image: string;
}
