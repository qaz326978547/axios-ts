<template>
  rsdfsd
</template>

<script setup lang="ts">
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';


const api = axios.create({
  baseURL: 'https://type-script-demo.vercel.app/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});




</script>