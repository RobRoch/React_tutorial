import React from 'react'

export const createCartList = (arr) => {
    return arr.map(item=>
        <div key={item.id} className='item'>
          <div className='item__wrapper'>
            <div className='item__spec'>
                <p className='item__title'>{item.title}</p>
                <p className='item__cost'>{item.cost} zł</p>
                <p><button className='item__button'>Dodaj</button><button className='item__button'>Usuń</button></p>
            </div>
            <div className='item__count'>
                <p>Ilość</p>
                <p>5</p>
            </div>
          </div>
        </div>
        )
}