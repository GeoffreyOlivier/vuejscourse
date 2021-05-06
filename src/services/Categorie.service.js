import axios from "axios"

class CategorieService {
    constructor() {
        this.axios = axios.create({
                baseURL: 'http://localhost:3000'
            });
    }

    async getAll(){
        let response = await this.axios.get('/categorie');
        return response.data
    }

    async getSubCategorieById(id){
        let response = await this.axios.get('/sous_categories/' + id);
        return response.data
    }

    async getProducts(id) {
        let response = await this.axios.get('/all_products/' + id)
        return response.data
    }

    async getProductById(id) {
        let response = await this.axios.get('/product/' + id)
        return response.data
    }
}

export default new CategorieService()