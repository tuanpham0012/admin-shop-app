import { defineStore } from "pinia";
import {
    _getList,
    _create,
    _show,
    _update,
    _destroy,
} from "@/helpers/axiosConfig";

interface State {
    products: any | [];
    product: any | null;
    errors: any | null;
    categories: any | [],
    suppliers: any
}

export const useProductStore = defineStore("product", {
    state: (): State => {
        return {
            products: {
                code: 200,
                message: "",
                data: [],
                meta: null,
            },
            categories: {
                code: 200,
                message: "",
                data: [],
                meta: null,
            },
            suppliers: {
                code: 200,
                message: "",
                data: [],
                meta: null,
            },
            product: null,
            errors: null,
        };
    },

    actions: {
        async getList(query: any) {
            await _getList("http://localhost:5077/Customer", query)
                .then((res) => {
                    console.log(res.data);
                    this.products = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        async getListCategory(query: any) {
            await _getList("http://localhost:5077/Category", query)
                .then((res) => {
                    console.log(res.data);
                    this.categories = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        async getListSupplier(query: any) {
            await _getList("http://localhost:5077/Supplier", query)
                .then((res) => {
                    console.log(res.data);
                    this.suppliers = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        async create(data: any) {
            return await _create("http://localhost:5077/Product", data);
        },
        show(id: any) {
            _show("http://localhost:5077/Customer/" + id)
                .then((res) => {
                    this.product = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        async update(id: any, data: any) {
            return await _update("http://localhost:5077/Customer/" + id, data);
        },
        async delete(id: any) {
            return await _destroy("http://localhost:5077/Customer/" + id);
        },
    },
});
