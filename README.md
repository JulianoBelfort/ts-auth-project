# TypeScript JWT Auth Project

---

### Requisitos

-   [NodeJS](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [TypeORM](https://typeorm.io/)
-   [JWT](https://jwt.io/)

### Arquivo de configuração

Para dar uma maior flexibilidade na aplicação, foi criado um conjunto de variáveis de ambiente que modificam o comportamento da mesma.

Para inicializar seu arquivo de configuração:

```shell
cp .env_template .env
```

### Parâmetros

| Variável | Descrição                   | Obrigatório | Valor Padrão |
| -------- | --------------------------- | ----------- | ------------ |
| TZ       | _Timezone_ dos _containers_ | [ ] Não     | UTC          |

---

## Provisionamento

Para iniciar os serviços de Banco de Dados:

```shell
docker-compose up -d --build
```

---

## Arquitetura

-   _**Requests**_: [Insomnia V4 (JSON)](insomnia.json)

---

## Inicialização e dependências

Para inicializar yarn e tsconfig no projeto

```
yarn init -y && yarn tsc --init
```

Para adicionar dependencias

```
yarn add express typeorm reflect-metadata sqlite3 uuid express-async-errors pg bcryptjs jsonwebtoken
```

Para adicionar dependencias de desenvolvimento

```
yarn add typescript @types/express ts-node-dev @types/uuid @types/bcryptjs @types/jsonwebtoken -D
```

---

## Entidades e migrações

Para criar **migrations** e **entidades**:

```
yarn typeorm migration:create -n Create<Entity>
yarn typeorm entity:create -n <Entity>
```

Para gerar ou reverter **migrations**:

```
yarn typeorm migration:run
yarn typeorm migration:revert
```

---

## Desenvolvimento

Para instalar dependências e pacotes:

```
yarn install
```

Para iniciar a aplicação no modo de desenvolvedor:

```
yarn dev
```
