import React from 'react'

export const createList = (arr) => {
    return arr.map(item=>
        <div key={item.id} className='item'>
          <p className='item__remove'>X</p>
          <p className='item__title'>{item.title}</p>
          <p className='item__cost'>{item.cost} zł</p>
          <p><button className='item__button'>Kup</button></p>
        </div>
        )
}