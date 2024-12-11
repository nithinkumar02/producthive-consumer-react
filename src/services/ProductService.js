import axois from 'axios';

const PRODUCTS_RESTAPI_URL='http://localhost:8088/producthive/api/products'


//service layer interacting with the producthive restapi of spring boot
//USING AXIOS
class ProductService {


    static getProducts (){
        return axois.get(PRODUCTS_RESTAPI_URL);
    }
    

}
export default ProductService;