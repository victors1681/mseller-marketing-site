/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/register',
        destination: 'https://cloud.mseller.app/register',
        permanent: true,
      },
      {
        source: '/login',
        destination: 'https://cloud.mseller.app/login',
        permanent: true,
      },
      {
        source: '/:lang/register',
        destination: 'https://cloud.mseller.app/register',
        permanent: true,
      },
      {
        source: '/:lang/login',
        destination: 'https://cloud.mseller.app/login',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
