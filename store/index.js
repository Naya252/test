export default {
    state(){
        return {
            sitename: 'Бриллианты Костромы!',
            cart: [],
            products: [],

        }            
    },
    getters: {
        cartItemCount(state){
            return state.cart.length;
        }
    },
    mutations:{
        addToCart(state, id){
            state.cart.push(id);
        },
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