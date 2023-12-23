/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'www.edamam.com',
            "edamam-product-images.s3.amazonaws.com"
        ]
    }
}

module.exports = nextConfig
