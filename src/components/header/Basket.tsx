import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import style from "./Basket.module.css"
import styles from "../../common/Conteiner.module.css"
import {addProductAC, deleteAllProductAC, deleteProductAC} from "../../state/app-reducer";
import basket from "../../common/img/Vector.png"


const Basket = () => {
    const elementsForBasket= useSelector((state:AppRootStateType)=> state.products.elementsForBasket)
    const dispatch = useDispatch()

    const [total, setTotal] = useState(0)
    useEffect(() => {
        const totalPrice = elementsForBasket.reduce((acc, curr) => {
            return acc + +curr.product.price.priceFormatted.slice(1) * curr.count
        }, 0);
        setTotal(totalPrice)

    }, [elementsForBasket])
    console.log(elementsForBasket, 'basket')
    return (<div className={style.basket}>
        {elementsForBasket.length ?
            <div>
                {elementsForBasket.map((el) => {
                    return (
                        <div className={styles.basketProductContainer}>
                        <tr key={el.product.id} className={style.cartBlock}>
                            <td><img className={style.basketImg} src={el.product.image}/></td>
                            <td>{el.product.name}</td>
                            <td className={style.blockBasket}>
                                <div className={style.decInc}
                                     onClick={() => dispatch(deleteProductAC(el.product.id))}
                                >-
                                </div>
                                <div className={style.num}>
                                    {el.count}
                                </div>
                                <div className={style.decInc}
                                     onClick={() => dispatch(addProductAC(el.product.id))}
                                >+
                                </div>
                            </td>
                            <td>{`$ ${+el.product.price.priceFormatted.slice(1) * el.count}`}</td>
                            <td>
                                <div className={style.del}
                                    onClick={() => dispatch(deleteAllProductAC(el.product.id))}>
                                    <img className={style.img} src={basket}/>
                                </div>
                            </td>
                        </tr>
                        </div>
                    )
                })}
                <div>
                    Итого ${total}
                </div>
            </div> : <div>your basket empty</div>
        }

    </div>);
}

export default Basket;