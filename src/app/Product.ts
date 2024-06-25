//defino interface para tipar los productos
//le pongo export para hacerla publica

export interface Product{
    cod: number;
    description: string;
    mark: string;
    price: number;
    stock: number;
    image: string;
    clearance: boolean;//si esta en oferta
    quantity: number;//cantidad comprada
}