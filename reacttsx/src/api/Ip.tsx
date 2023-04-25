export interface IProduct {
    startsWith(value: string): unknown;
    id: number,
    categoryId: number,
    name: string,
    price: number,
    description: string,
    image: any
}