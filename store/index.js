export default {
    state(){
        return {
            sitename: 'Бриллианты Костромы!',
            products: [],

        }            
    },
    getters: {

    },
    mutations:{
        addProducts(state, arrProducts){
            for(let i = 0; i < arrProducts.length; i++){
                state.products.push(arrProducts[i]);
            }
        },
    },
    actions:{
        nuxtServerInit (contextFromStore, contextFromNuxt){
          return contextFromNuxt.$axios.get('http://localhost:3000/api/data/products')
            .then((res)=>{
                contextFromStore.commit("addProducts", res.data);
            })
            .catch((err)=>{
                contextFromNuxt.error({
                    statusCode: 404, message: 'Страница не найдена'
                });
            });
        },
        
    }
}