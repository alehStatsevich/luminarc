import React, {useState} from 'react';
import style from './ProductCards.module.css';
import styles from '../../common/Conteiner.module.css'
import photoBasket from '../../common/img/basket 1.png'
import {useDispatch, useSelector} from "react-redux";
import {addProductBasketAC} from "../../state/app-reducer";
import {AppRootStateType} from "../../state/store";


type PriceType = {
    amount: number,
    priceFormatted: string
}
type pricePromotialType = {
    amount: number,
    priceFormatted: string
}
type ProductsType = {
    id: string,
    name: string,
    price: PriceType,
    pricePromotial?: pricePromotialType,
    decimal: number,
    image: any,
}
export type ProductType = {
    product: ProductsType
}

export const ProductCards = (props: ProductType) => {
    const [disable, setDisable] = useState(false);
    const count = useSelector<AppRootStateType, any>(state => state.products.elementsForBasket);
    const dispatch = useDispatch()
    const addProduct = () => {
        const action = addProductBasketAC(props.product.id)
        dispatch(action)
        setDisable(true)
    }
    return (
        <div className={styles.basketProductContainer}>
            <div className={style.productCardBlock}>
                    <img src={props.product.image} className={style.image}/>
                    <div className={style.workInfo}>
                        <h3 className={style.productTitle}>{props.product.name}</h3>
                        <h3 className={style.productTitle}>{props.product.id}</h3>
                        {props.product.pricePromotial?.priceFormatted ?
                            <span className={style.pricePromotial}>{props.product.pricePromotial.priceFormatted}</span>
                            : <span className={style.price}>{props.product.price.priceFormatted}</span>}
                        <button className={style.btn}
                                style={disable ? {backgroundColor: "#cc016a"} : {}}
                                onClick={addProduct}
                                disabled={disable}
                        >
                            <img src={photoBasket} className={style.basket} alt="photoBasket"/>
                            {/*В корзину*/}
                            <span>{disable ? "Товар в корзине" : "В корзину"}</span>
                        </button>
                    </div>
            </div>
        </div>
    );
}

