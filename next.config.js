/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit-v2",

    DB_URI: "",

    STRIPE_WEBHOOK_SECRET: "",

    STRIPE_SECRET_KEY: "",

    CLOUDINARY_CLOUD_NAME: "dpkfeybol",
    CLOUDINARY_API_KEY: "465674236428374",
    CLOUDINARY_API_SECRET: "OkmBOFDPaiumhxv5yWtwFHpAM0k",

    SMTP_HOST: "sandbox.smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "ca0741af7e24de",
    SMTP_PASSWORD: "9b01911bfdf437",
    SMTP_FROM_EMAIL: "noreply@booking.com",
    SMTP_FROM_NAME: "BookIT",

    REACT_APP_API_KEY: "AIzaSyBoR1xpqL__hLkytBOusc2LosTCHEcMSnw",

    // GEOCODER_API_KEY: "KBnYKpNZmoHkZ9gNdyO7afcCtxbb1tI3",
    // GEOCODER_PROVIDER: "mapquest",
    GEOCODER_API_KEY: "CCzjdYj56z8pPUb3edcjuePU9kJ2sY48",
    GEOCODER_PROVIDER: "mapquest",

    MAPBOX_ACCESS_TOKEN: "",

    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
