# Full Stack Week -Foods - iFood Clone

- [Figma](https://www.figma.com/file/1jN6R19FdAn7L8JWUm4I9j/[LIVE]-FSW-Foods?type=design&node-id=381-7368&mode=design&t=62eYbIC66DJlgfe2-0)
- [NextJS](https://nextjs.org/)
- [Shadcn / UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

## Database
- [Prisma](https://www.prisma.io/)
- [Postgres](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Neon DB](https://neon.tech/)

## VS Code Extensions
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

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

Install the development dependencies:
```sh
npm i prisma -D
npm i ts-node -D
npm i -D prettier prettier-plugin-tailwindcss
npm i -D husky lint-staged
```

Create the Prisma Schema (postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb):
```sh
npx prisma init --datasource-provider postgresql
```

Generate the database and tables:
```sh
npx prisma migrate dev --name init_database
```

Populate the database:
```sh
npx prisma db seed
```

Configure the Husky:
```sh
npx husky init
```

Create the Shadcn setup:
```sh
npx shadcn-ui@latest init
```

Install the Shadcn components:
```sh
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```:


Start the project:
```sh
npm run dev
```
