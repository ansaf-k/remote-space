import {
    createDirectus,
    authentication,
    rest,
    createItem as createItemOperation,
    deleteItem as deleteItemOperation,
    readItems,
    readMe,
    readCollections,
    updateItem as updateItemOperation,
} from '@directus/sdk';


    const directus = createDirectus('http://localhost:8055').with(authentication('json')).with(rest());


export {
    createItemOperation as createItem, deleteItemOperation as deleteItem, directus,
    readItems, readMe, updateItemOperation as updateItem, readCollections
};