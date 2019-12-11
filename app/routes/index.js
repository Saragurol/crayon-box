import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model(){
        // model hook/method fetches any data for the route
        let response = await fetch(`/api/colors.json`);
        // the Browser's fetch API requests the JSON data from our server's API at "public/api/colors.json"
        let { data } = await response.json();
        // parsing JSON data 

        return data.map(model => {
            let { id, attributes } = model;
            // extracting the nested attributes object
              return { id, ...attributes };
        })
    }
}

// async model(params){
    //         // model hook/method fetches any data for the route
    //         let response = await fetch(`/api/colors/${params.color_id}.json`);
    //         // the Browser's fetch API requests the JSON data from our server's API at "public/api/colors.json"
    //         let { data } = await response.json();
    //         // parsing JSON data 
    //         let { id, attributes } = data;
    //         return { id, ...attributes }
    //     }
