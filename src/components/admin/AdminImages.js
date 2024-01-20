import React, { useState } from 'react';
import "../../styles/admin/AdminImages.css";

export default function AdminImages({images, addImage, deleteImage, changeOrder, user_id}) {
console.log(images)
    const [newImage, setNewImage] = useState({
        title:'',
        url:'',
        order_number: "",
        user_id: user_id
    });

    const [newOrder, setNewOrder] = useState({
        order_number: ""
    })

    console.log(newOrder)

    const inputChanges = e => {
        e.persist()
        setNewImage({
            ...newImage,
          [e.target.name]: e.target.value,
        });
      };

    const newOrderChanges = e => {
        e.persist()
        setNewOrder({
            ...newOrder, order_number: e.target.value
        })
    }

    const formSubmit = e => {
        e.preventDefault()
        console.log(newImage)
        addImage({...newImage,
            url: `https://lh3.google.com/u/0/d/${newImage.url.slice(32,65)}`
        })
        setNewImage({...newImage, url: ""})
    }

    const changeSubmit = (image) => {
        console.log(image)
        console.log(`new order number: ${newOrder.order_number}`)
        changeOrder(image.id, {
            ...image, order_number: newOrder.order_number
        })
    }

  return (
    <div className='admin-image-outer'>
        <div className='admin-image-form'>
            <form onSubmit={formSubmit}>
                <input type='text' id='title' name='title' placeholder='image title' value={newImage.title} onChange={inputChanges}/>
                <input type='text' id='url' name='url' placeholder='image url' value={newImage.url} onChange={inputChanges}/>
                <input type='number' id='order_number' name='order_number' placeholder='order number' 
                value={newImage.order_number}
                onChange={inputChanges}/>
                <button>Add</button>
            </form>
        </div>
        <div className='admin-image-list'>
            {images?images.map(image => (
                <div className='image-div' key={image.id}>
                    <h2>{image.order_number}</h2>
                    <p>{image.title}</p>
                    <img src={image.url.includes("https://drive.google.com/uc?export=view&id=")?`https://lh3.google.com/u/0/d/${image.url.slice(43,image.url.length)}`:image.url}
                        alt={image.title} 
                        width={200} 
                        height={200} 
                        title={image.title} 
                        loading='lazy'/>
                    <input type='number' id='order_number' name='order_number' placeholder='order number' 
                    value={newOrder.order_number}
                    onChange={newOrderChanges}/> 
                    <button onClick={()=>changeSubmit(image)}>Change order</button>
                    <button onClick={()=>deleteImage(image.id)}>Delete</button>
                </div>
            )):null}
        </div>
    </div>
  )
}


