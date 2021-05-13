import React,{useState} from 'react'
import {SHOP_DATA} from '../Data'
import CollectionPreviews from './../components/collectionPreview/collection-preview.component';


export default function ShopPage() {
    const [collection,setcollection] = useState(SHOP_DATA)
    return (
        <div className="shop-page">
            {
                collection.map(({id, ...otherCollectionProp})=>(
                    <CollectionPreviews key={id} {...otherCollectionProp} />
                ))
            }
        </div>
    )
}
