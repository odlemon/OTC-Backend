import { defineStore } from "pinia";
import axios from "axios";

export const useItemStore = defineStore('item', {
    state: () => ({
        itemList: [],
    }),
    actions: {
        async getItems(){
   
               const config = {
                  method: 'post',
                  url: '/get-items',
                  headers: { 
                     'Accept': '/',
                     'Cache-Control': 'no-cache',
                     'Content-Type': 'application/json'
                  },
                
               }; 
    
               
               const result: any = await axios(config).then(function (response) {
                  console.log("Items ------------->")  
                  console.log(JSON.stringify(response.data));
                  return {
                     
                     data: response.data,
                     success: true  
                  }
                  
               }).catch(function (error) {
                  console.log('errrrrrooooorrr', error);
   
                  return {
                     success: false
                  }
               });
   
               return result;
          
         },

         async listItems() {
            try {
              const itemList = await $fetch('/item-list', {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              });
              
              this.itemList = itemList;
              
              return itemList;
            } catch (error) {
              console.error(error);
              throw error;
            }
          }
    }
});

