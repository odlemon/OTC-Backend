<template>
  <NuxtLayout name="dashboard">
      <section class="section">
        <div class="container-fluid pt-5">
          <div class="grid">
          <div class="col-12 lg:col-12 p-3">
            <div class="flex flex-column md:flex-row gap-3 md:align-items-center bg-primary border-round-xl p-3">
          <div class="flex flex-column align-items-center md:w-8rem">
            <button class="p-button p-button-icon-only p-button-rounded p-button-sm bg-primary" data-pd-ripple="true">
             
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </button>
            
            <button class="p-button p-button-icon-only p-button-rounded p-button-sm bg-primary" data-pd-ripple="true">
           
              <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </button>
          </div>
          <div class="flex-1 gap-3 flex flex-column sm:flex-row">
            <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
              <div class="text-center">
                <i class="pi pi-book text-4xl mb-2"></i>
                <div class="text-sm font-semibold mb-2">Sales Invoices</div>
                <span class="font-semibold">{{ invoiceCount }}</span>
              </div>
            </div>
            <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
              <div class="text-center">
                <i class="pi pi-book text-4xl mb-2"></i>
                <div class="text-sm font-semibold mb-2">Quotations</div>
                <span class="font-semibold">{{ quotaionCount }}</span>
              </div>
            </div>
            <div class="flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md">
              <div class="text-center">
                <i class="pi pi-users text-4xl mb-2"></i>
                <div class="text-sm font-semibold mb-2">Users</div>
                <span class="font-semibold">{{ userCount }}</span>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        </div>
      </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import axios from 'axios';


const invoiceCount = ref(0);
const quotaionCount = ref(0);
const userCount = ref(0);

onMounted(() => {
        
        const getInvoices= async () => {
          
          var config = {
              method: 'post',
              url: '/invoice/list',
              headers: { 
                  'Content-Type': 'application/json'
              },
          };

          const result: any = await axios(config).then(function (response) {
            console.log(JSON.stringify(response.data.data));
            for (let i in response.data.data){
                 invoiceCount.value += 1;
            }
              return {
                  data: response.data,
                  success: true
                  }
          })
          .catch(function (error) {
              console.log(error);
              return {
                  success: false
                  }
          });
          return result;
          }

          const getQuotations = async () => {
          
          var config = {
              method: 'post',
              url: '/quotation/list',
              headers: { 
                  'Content-Type': 'application/json'
              },
          };

          const result: any = await axios(config).then(function (response) {
            console.log(JSON.stringify(response.data.data));
            for (let i in response.data.data){
                 quotaionCount.value += 1;
            }
              return {
                  data: response.data,
                  success: true
                  }
          })
          .catch(function (error) {
              console.log(error);
              return {
                  success: false
                  }
          });
          return result;
          }

          const getUsers= async () => {
          
          var config = {
              method: 'post',
              url: '/users/all',
              headers: { 
                  'Content-Type': 'application/json'
              },
          };

          const result: any = await axios(config).then(function (response) {
            //console.log(JSON.stringify(response.data.data));
            for (let i in response.data.data){
                 userCount.value += 1;
            }
              return {
                  data: response.data,
                  success: true
                  }
          })
          .catch(function (error) {
              console.log(error);
              return {
                  success: false
                  }
          });
          return result;
          }
            getUsers();
            getQuotations();
            getInvoices();

        });
 
</script>

<style>
  .card-style {
  background: #fff;
  box-sizing: border-box;
  padding: 25px 30px;
  height: 100%;
  position: relative;
  border: 1px solid #fff;
  box-shadow: 0px 10px 20px rgb(200 208 216 / 0%);
  border-radius: 10px;
  }
  .row.dashtop {
  margin-bottom: 30px;
  }
  .c-dashboardInfo {
  margin-bottom: 15px;
  }
  .c-dashboardInfo .wrap {
    background: #ffffff;
    box-shadow: 2px 10px 20px rgb(0 0 0 / 10%);
    border-radius: 5px;
    text-align: center;
    position: relative;
    border: solid 1px white;
    border-color: red solid 2px;
    overflow: hidden;
    padding: 40px 25px 20px;
    height: 100%;
}
  .c-dashboardInfo__title,
  .c-dashboardInfo__subInfo {
  color: #6c6c6c;
  font-size: 1.18em;
  }
  .c-dashboardInfo span {
  display: block;
  }
  .c-dashboardInfo__count {
  font-weight: 600;
  font-size: 2.5em;
  line-height: 64px;
  color: #323c43;
  }
  .c-dashboardInfo .wrap:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15px;
    content: "";
}
.loader{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
 }

  .c-dashboardInfo:nth-child(1) .wrap:after {
    background: linear-gradient(82.59deg, #6477c6 0%, #4a6cf7 100%);
  }
  .c-dashboardInfo:nth-child(2) .wrap:after {
    background: linear-gradient(82.59deg, #6477c6 0%, #4a6cf7 100%);
  }
  .c-dashboardInfo:nth-child(3) .wrap:after {
    background: linear-gradient(82.59deg, #6477c6 0%, #4a6cf7 100%);
  }
  .c-dashboardInfo:nth-child(4) .wrap:after {
    background: linear-gradient(82.59deg, #6477c6 0%, #4a6cf7 100%);
  }
  .c-dashboardInfo:nth-child(5) .wrap:after {
    background: linear-gradient(82.59deg, #6477c6 0%, #4a6cf7 100%);
  }
  .c-dashboardInfo__title svg {
  color: #d7d7d7;
  margin-left: 5px;
  }
  .MuiSvgIcon-root-19 {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 24px;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  flex-shrink: 0;
  }
 .icon-card{
  width: 110%;
} 
.dashboard{
  margin-right: 20px;
}

</style>