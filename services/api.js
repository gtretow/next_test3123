import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nsnarjiuyjyvxcmcnjev.supabase.co',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zbmFyaml1eWp5dnhjbWNuamV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwODE1MzQsImV4cCI6MjA0MTY1NzUzNH0.k5FYtrfByrfDSdMVh2Bc2IWWFfBbi9XWfQae834d-F4',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zbmFyaml1eWp5dnhjbWNuamV2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjA4MTUzNCwiZXhwIjoyMDQxNjU3NTM0fQ.JBWAeEl47wAq4fmQbItNDSQa-pOHx5bmWIhWKtim240',
  },
});
