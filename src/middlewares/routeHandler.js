import { routes } from "../routes.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";
import { Database } from "../Database.js";

const database = new Database()


export function routeHandler(req, resp) {
    const route = routes.find((route) => {
        return route.method === req.method && route.path.test(req.url)
    })

    if (route) {
        const routeParams = req.url.match(route.path)
        const {query, ...params } = routeParams.groups

        

        req.params = params
        req.query = query ? extractQueryParams(query) : {}

        return route.controller({req, resp, database})  
    }
    
    return resp.writeHead(404).end('Rota não encontrada')
}  

