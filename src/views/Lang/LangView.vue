<template>
    <div>
        <select @change="handleChangeLanguage">
            <option value="zh-TW">中文</option>
            <option value="en-US">English</option>
        </select>
        <div style="margin: 24px 0;">
            <button class="btn btn-primary" @click="changeLanguage('zh-TW')">中文</button>
            <button class="btn btn-outline-primary" @click="changeLanguage('en-US')">English</button>
        </div>

        <h2>{{ $t('home') }}</h2>
        <h3>{{ $t('about') }}</h3>
        <h4>{{ $t('trans_status.all') }}</h4>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
const handleChangeLanguage = (e: Event) => {
    const target = e.target as HTMLSelectElement
    locale.value = target.value
}

const changeLanguage = (lang: string) => {
    locale.value = lang
}
</script>