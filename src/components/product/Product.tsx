import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {ProductCards} from "./ProductCards";
import {ProductsType, ProductType} from "../../state/app-reducer";
import style from "./Product.module.css"


const Product = () => {
    const {title} = useParams<{ title: string }>();
    const elements = useSelector<AppRootStateType, any>(state => state.products.elements)
    console.log(elements)
    const el = elements.find((el: ProductType) => {
        return el.id === title
    })
    return (
        <div className={style.block}>
            {
                el.items.map((el: ProductsType) => {
                    return <ProductCards product={el}/> })
            }
        </div>
    );
}

export default Product;