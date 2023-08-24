[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg?label=elky-essay)](https://elky84.github.io)
![Made with](https://img.shields.io/badge/made%20with-PHP-brightgreen.svg)
![Made with](https://img.shields.io/badge/made%20with-Laravel-blue.svg)
![Made with](https://img.shields.io/badge/made%20with-MySQL-red.svg)

![GitHub forks](https://img.shields.io/github/forks/elky84/nestjs-api-prisma.svg?style=social&label=Fork)
![GitHub stars](https://img.shields.io/github/stars/elky84/nestjs-api-prisma.svg?style=social&label=Stars)
![GitHub watchers](https://img.shields.io/github/watchers/elky84/nestjs-api-prisma.svg?style=social&label=Watch)
![GitHub followers](https://img.shields.io/github/followers/elky84.svg?style=social&label=Follow)

![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)
![GitHub repo size in bytes](https://img.shields.io/github/repo-size/elky84/nestjs-api-prisma.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/elky84/nestjs-api-prisma.svg)

# nestjs-api-prisma

# 개요
공식 페이지 문서를 통해 prisma를 nest.js 환경에서 이용한 튜토리얼입니다.

https://docs.nestjs.com/recipes/prisma

# 구현된 API

## GET
- /post/:id: Fetch a single post by its id
- /feed: Fetch all published posts
- /filter-posts/:searchString: Filter posts by title or content

## POST

### /post: Create a new post

Body:

title: String (required): The title of the post

content: String (optional): The content of the post

authorEmail: String (required): The email of the user that creates the post

### /user: Create a new user

Body:

email: String (required): The email address of the user

name: String (optional): The name of the user

# PUT
- /publish/:id: Publish a post by its id

# DELETE
- /post/:id: Delete a post by its id
