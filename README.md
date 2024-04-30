# Full Stack Week -Foods - iFood Clone

- [Figma](https://www.figma.com/file/1jN6R19FdAn7L8JWUm4I9j/[LIVE]-FSW-Foods?type=design&node-id=381-7368&mode=design&t=62eYbIC66DJlgfe2-0)
- [NextJS](https://nextjs.org/)

## Database
- [Prisma](https://www.prisma.io/)
- [Postgres]()
- [Docker]()
- [Neon DB](https://neon.tech/)

## VS Code Extensions
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

## Conventional Commits
- fix
- feat
- chore

Create the project:
```sh
npx create-next-app@latest foods
```

Install the dependencies:
```sh

```

Create the Prisma Schema (postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb):
```sh
npx prisma init --datasource-provider postgresql
```

Generate the database and tables:
```sh
npx prisma migrate dev --name init_database
```

Install the development dependencies:
```sh
npm i prisma -D
```

Start the project:
```sh
npm run dev
```
