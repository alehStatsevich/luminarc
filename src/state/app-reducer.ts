import DinnerSets from '../common/DinnerSetsImg/images.jpg';
import DinnerSets1 from '../common/DinnerSetsImg/images(1).jpg';
import DinnerSets2 from '../common/DinnerSetsImg/images(2).jpg';

type PriceType = {
    amount: number,
    priceFormatted: string
}
type pricePromotialType = {
    amount: number,
    priceFormatted: string
}

export type ProductsType = {
    id: string,
    name: string,
    price: PriceType,
    pricePromotial?: pricePromotialType,
    decimal: number,
    image: any,
}
export type ProductType = {
    id: string,
    items: Array<ProductsType>
}
export type ElementType = {
    product: ProductsType
    count: number
}

export type initialStateType = {
    elementsForBasket: Array<ElementType>
    elements: Array<{ id: string, items: Array<ProductsType> }>
}

export const addProductBasketAC = (id: string) => ({type: 'ADD_PRODUCT_BASKET', id} as const)
export const addProductAC = (id: string) => ({type: 'ADD_PRODUCT', id} as const)
export const deleteProductAC = (id: string) => ({type: 'DELETE_PRODUCT', id} as const)
export const deleteAllProductAC = (id: string) => ({type: 'DELETE_ALL_PRODUCT', id} as const)



export type addProductBasketType = ReturnType<typeof addProductBasketAC>
export type addProductType = ReturnType<typeof addProductAC>
export type deleteProductAC = ReturnType<typeof deleteProductAC>
export type deleteAllProductAC = ReturnType<typeof deleteAllProductAC>
type ActionsType = addProductBasketType | addProductType | deleteProductAC | deleteAllProductAC

export const appReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'ADD_PRODUCT_BASKET': {
            const copyState = {...state}
            state.elements.forEach(e => {
                let item = e.items.find(i => {
                    return i.id === action.id
                });
                item && copyState.elementsForBasket.push({product: item, count: 1})
            })
            return copyState
        }
        case 'ADD_PRODUCT': {
            const copyState = {...state}
            copyState.elementsForBasket = copyState.elementsForBasket.map(el => {
                if (el.product.id === action.id) {
                    return {...el, count: el.count + 1}
                } else {
                    return el
                }
            })
            return copyState
        }
        case 'DELETE_PRODUCT': {
            const copyState = {...state}
            copyState.elementsForBasket = copyState.elementsForBasket.map(el => {
                if (el.product.id === action.id) {
                    return {...el, count: el.count - 1}
                } else {
                    return el
                }
            })
            return copyState
        }
        case 'DELETE_ALL_PRODUCT': {
            const copyState = {...state}
            copyState.elementsForBasket = copyState.elementsForBasket.filter(el => el.product.id !== action.id)
            return copyState
        }
        default:
            return state;
    }
}
const initialState: initialStateType = {
    elementsForBasket: [],
    elements: [
        {
            id: "Сервизы столовые",
            items: [
                {
                    "id": "e859e78c-1309-40fd-92a0-efa37b9cd4ea",
                    "name": "Сервиз столовый",
                    "price": {
                        "amount": 4200,
                        "priceFormatted": "$42.00"
                    },
                    "pricePromotial": {
                        "amount": 2600,
                        "priceFormatted": "$26.00"
                    },
                    "decimal": 2,
                    "image": DinnerSets,
                },
                {
                    "id": "f0f58263-cd0f-4a25-8205-4a89706e203a",
                    "name": "Сервиз столовый",
                    "price": {
                        "amount": 14999,
                        "priceFormatted": "$149.99"
                    },
                    "decimal": 2,
                    "image": DinnerSets1,
                },
                {
                    "id": "30d00737-5a93-4d59-9bea-201d30fb1d0a",
                    "name": "Сервиз столовый",
                    "price": {
                        "amount": 23999,
                        "priceFormatted": "$239.99"
                    },
                    "pricePromotial": {
                        "amount": 22000,
                        "priceFormatted": "$220.00"
                    },
                    "decimal": 2,
                    "image": DinnerSets2
                },
                {
                    "id": "184d2344-061b-405d-bf8c-aab2fa578d0b",
                    "name": "Сервиз столовый",
                    "price": {
                        "amount": 13900,
                        "priceFormatted": "$139.00"
                    },
                    "decimal": 2,
                    "image": DinnerSets
                },
                {
                    "id": "1a14e6aa-b757-4c37-ac3e-c5f92a0adc54",
                    "name": "Сервиз столовый",
                    "price": {
                        "amount": 14999,
                        "priceFormatted": "$149.99"
                    },
                    "decimal": 2,
                    "image": DinnerSets2
                },
            ],
        },
        {
            id: "Сервизы чайные",
            items: [
                {
                    "id": "5007aeb3-21ec-4052-9664-b97ece3807e8",
                    "name": "Almost gaming headphones",
                    "price": {
                        "amount": 7900,
                        "priceFormatted": "$79.00"
                    },
                    "decimal": 2,
                    "image": "headphones2.png",
                },
                {
                    "id": "5007aeb3-21ec-4052-9664-b97ece3807e9",
                    "name": "Almost gaming headphones",
                    "price": {
                        "amount": 7900,
                        "priceFormatted": "$79.00"
                    },
                    "decimal": 2,
                    "image": "headphones2.png",
                },
            ]
        },

        {
            id: "Тарелки",
            items: [
                {
                    "id": "5431d5df-710a-48fc-b35e-13b7c3b9e538",
                    "name": "Almost gaming headphones",
                    "price": {
                        "amount": 7900,
                        "priceFormatted": "$79.00"
                    },
                    "decimal": 2,
                    "image": "headphones2.png",
                },
                {
                    "id": "37bca50a-4e40-4507-946a-c2d2f3a7ca77",
                    "name": "Chair for you",
                    "price": {
                        "amount": 18999,
                        "priceFormatted": "$189.99"
                    },
                    "decimal": 2,
                    "image": "chair4.png",
                },
            ]
        },
        {
            id: "Салатники",
            items: [
                {
                    "id": "6302f1d2-ae70-45fd-b58b-2f6804d7b5a8",
                    "name": "Red headphones",
                    "price": {
                        "amount": 23999,
                        "priceFormatted": "$239.99"
                    },
                    "pricePromotial": {
                        "amount": 22000,
                        "priceFormatted": "$220.00"
                    },
                    "decimal": 2,
                    "image": "headphones1.png",
                },
                {
                    "id": "80ea4ce9-da33-4d24-b4db-45e37abb5bf5",
                    "name": "Incredible chair",
                    "price": {
                        "amount": 11999,
                        "priceFormatted": "$119.00"
                    },
                    "decimal": 2,
                    "image": "chair3.png",
                },]
        },
        {
            id: "Блюда | Селедочницы",
            items: [
                {
                    "id": "cd2de511-da5c-441f-9dc6-d991b3983553",
                    "name": "Red headphones",
                    "price": {
                        "amount": 17999,
                        "priceFormatted": "$179.99"
                    },
                    "pricePromotial": {
                        "amount": 16000,
                        "priceFormatted": "$160.00"
                    },
                    "decimal": 2,
                    "image": "chair4.png",
                },
                {
                    "id": "b1934f02-bd5b-487c-8b4a-45102d77ccf3",
                    "name": "Chair for you",
                    "price": {
                        "amount": 18999,
                        "priceFormatted": "$189.99"
                    },
                    "decimal": 2,
                    "image": "chair4.png",
                },]
        },
        {
            id: "Бокалы | Фужеры",
            items: [
                {
                    "id": "2254c925-d39f-44f4-b565-b636c905e7a3",
                    "name": "Cheap smartwatch",
                    "price": {
                        "amount": 14999,
                        "priceFormatted": "$149.99"
                    },
                    "decimal": 2,
                    "image": "smartwatch2.png",
                },
                {
                    "id": "e8aa7dfb-4d85-4b88-85b4-a6c371b787ba",
                    "name": "Incredible chair",
                    "price": {
                        "amount": 11999,
                        "priceFormatted": "$119.00"
                    },
                    "decimal": 2,
                    "image": "chair3.png",
                },
                {
                    "id": "97fee1bc-0d4c-4f4a-9ed0-6bd2ed3090fb",
                    "name": "Red headphones",
                    "price": {
                        "amount": 17999,
                        "priceFormatted": "$179.99"
                    },
                    "pricePromotial": {
                        "amount": 16000,
                        "priceFormatted": "$160.00"
                    },
                    "decimal": 2,
                    "image": "chair4.png",
                },

            ]
        },
        {
            id: "Стаканы | Рюмки",
            items: [
                {
                    "id": "7f39a9a8-4f3d-44ef-bce6-4209688754e6",
                    "name": "Incredible chair",
                    "price": {
                        "amount": 11999,
                        "priceFormatted": "$119.00"
                    },
                    "decimal": 2,
                    "image": "chair3.png",
                },
                {
                    "id": "de8d194a-7e5b-476a-8cb5-6b58b3405f4c",
                    "name": "Almost gaming headphones",
                    "price": {
                        "amount": 7900,
                        "priceFormatted": "$79.00"
                    },
                    "decimal": 2,
                    "image": "headphones2.png",
                },
                {
                    "id": "74b607a0-a135-4852-8631-cea25df6ae72",
                    "name": "Chair for you",
                    "price": {
                        "amount": 18999,
                        "priceFormatted": "$189.99"
                    },
                    "decimal": 2,
                    "image": "chair4.png",
                },
            ]
        }

    ]
}