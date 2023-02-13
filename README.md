# Cuptor

![image](https://user-images.githubusercontent.com/88671390/218345643-422722af-dcae-414f-9277-23607687738d.png)


Live preview :   [Cuptor](https://cuptor.vercel.app/).

Cuptor is an AI image generator that uses the OpenAI Dall-E API to create unique and creative images. This project is a full-stack application with a front-end built using Vite, React, TailwindCSS, and Headless UI and a back-end built using Node.js, Cloudinary, Express.js, and MongoDB.

## Table of Contents
- [Cuptor](#cuptor)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Usage](#usage)
- [Built With](#built-with)
- [Authors](#authors)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [Cloudinary Account](https://cloudinary.com/)
- [OpenAI API Key](https://beta.openai.com/signup)

### Installing

A step by step series of examples that tell you how to get a development env running:

1. Clone the repository to your local machine

```
git clone https://github.com/Hazemmhady/Cuptor.git
```
2. Navigate to the cloned repository

```
cd Cuptor
```
3. Install the dependencies for Client (FE) & server (BE)
```
npm install
```
4. Start the development server for the front-end
```
cd client
npm run dev
```
5. Start the development server for the back-end
```
cd server
npm run start:dev
```

### .env Example
```
NODE_ENV=
PORT=
DATABASE=
DATABASE_PASSWORD=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

OPENAI_API_KEY=
```
## Usage

Cuptor allows users to generate unique images using a textual description. The application connects to the OpenAI Dall-E API to generate the images, which are then stored in Cloudinary for future use.

## Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Vite](https://github.com/vitejs/vite)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/)
- [Cloudinary](https://cloudinary.com/)
- [OpenAI Dall-E](https://beta.openai.com/docs/models/dall-e)

## Authors

- [Hazem](https://github.com/Hazemmhady) (FE)
- [Moaz](https://github.com/moaazelsayed1) (BE)




