import { defineStore } from "pinia";
import { _getList } from "@/helpers/axiosConfig";

interface State {
    categories: any | [];
}

export const useCustomerStore = defineStore("customer", {
    state: (): State => {
        return {
            categories: {
                code: 200,
                message: "",
                data: [],
                meta: null,
            }
        };
    },

    actions: {
        getList(query: any) {
            _getList("http://localhost:5077/Category", query)
                .then((res) => {
                    console.log(res.data);
                    this.categories = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
});
