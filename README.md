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
  - feat     Adição de funcionalidade.
  - fix      Correção de defeito.
  - docs     Mudança em documentação.
  - style    Mudança de formatação ou estilo, que não afeta a execução do código (espaço, tabulação, etc).
  - refactor Mudança na organização do código, que não afeta o comportamento existente.
  - test     Adição ou mudança de um teste.
  - chore    Adição ou mudança em script de build, que não afeta o código de produção.
  - perf     Mudança de código para melhoria de desempenho.
  - ci       Mudança de configuração de integração contínua.
  - build    Mudança em arquivos de build ou em dependências externas.
  - temp     Commit temporário, que não deve ser incluído no CHANGELOG.

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
npm i -D git-commit-msg-linter
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

Configure the git-commit-msg-linter to work with Husky 5:
```sh
npx husky add .husky/commit-msg ".git/hooks/commit-msg \$1"
```

Create the Shadcn setup:
```sh
npx shadcn-ui@latest init
```

Install the Shadcn components:
```sh
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

Start the project:
```sh
npm run dev
```