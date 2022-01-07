import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';
s;

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.firstName;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users'); //shorthands
      this.post('/users');

      this.namespace = ''; // nao afetar as rotas do nextjs
      this.passthrough(); // se nao for do miragejs, passa pra frente
    },
  });

  return server;
}
