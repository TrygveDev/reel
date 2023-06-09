/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/',
})

module.exports = withPWA({
  images: {
    domains: ['image.tmdb.org'],
  },
})
