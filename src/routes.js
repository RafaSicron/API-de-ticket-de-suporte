import { parseRoutePath } from "./utils/parseRoutePath.js"


export const routes = [
    {
        method:'GET',
        path: '/products',
        controller: ({req, resp, database}) => {
            const products = database.select('products')
            return resp.end(JSON.stringify(products))
        }     
    },
    {
        method:'POST',
        path: '/products',
        controller: ({req, resp, database}) => {
            const {name, price} = req.body

            database.insert('products', {name, price})
            return resp.writeHead(201).end()
        }     
    },
    {
        method:'DELETE',
        path: '/products/:id',
        controller: ({req, resp, database}) => {
            return resp.end(`Produto removido com o ID: ${req.params.id}`)
        }     
    },
    
].map((route) => ({
    ...route,
    path: parseRoutePath(route.path)
}))

