import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import {products} from "../data/poroducts"
import { ItemList } from './ItemsList';

export const ItemListContainer = (props) => {
    const [items, setItems] = useState ([ ]);

    useEffect (() => {
        const mypromise = new Promise ((resolve,reject) => {
            setTimeout(() => {resolve(products)}, 2000)
        });

        mypromise.them((response) => setItems(response));
    }, [ ])

return (<Container>
    <h1>{props.greeting}</h1>
    <ItemList items={items} />
    </Container>

)

}