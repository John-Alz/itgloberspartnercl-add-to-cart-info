import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import styles from './styles.css'
import { generateBlockClass } from '@vtex/css-handles'
import { useCssHandles } from 'vtex.css-handles'
import  ButtonGroup  from './ButtonGroup'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {

  const container = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)
  const container__info = generateBlockClass(styles.container__info, blockClass)
  const container__image = generateBlockClass(styles.container__image, blockClass)
  const image = generateBlockClass(styles.image, blockClass)

  const CSS_HANDLES = ['container__buttons', 'link', 'title__product', 'paragraph__product']
  const handles = useCssHandles(CSS_HANDLES)

  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()

  console.log("tiene esta info mi product",productInfo);
  console.log("Esto son mis totales",items);


  return (
    <div className={container}>
      {
      items.map((item: any, index: number) => {
        // console.log(item);
        return (
          <div key={index} className={container__item}>
            <div className={container__image}>
              <img className={image} src={item.imageUrls.at1x} alt="image product" />
            </div>
            <div className={container__info}>
              <p className={handles.title__product}>{item.name}</p>
              <p className={handles.paragraph__product}>{item.id}</p>
              <p className={handles.paragraph__product}> ${item.price / 100}</p>
              <p className={handles.paragraph__product}>Cantidad: {item.quantity}</p>
            </div>
          </div>
        )
      })
      }
      <div>
      <p className={handles.paragraph__product}>Tenemos {items.length} items en tu compra</p>
      <p className={handles.title__product}>Total: {totalizers[0]?.value}</p>
      </div>
      <ButtonGroup/>
    </div>
  )
}


export default AddToCartInfo
