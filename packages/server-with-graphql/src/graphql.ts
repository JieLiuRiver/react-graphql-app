import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { Express } from 'express';
import { DBType, ToDoAttributes } from './database';

export const init = async (app: Express, db: DBType): Promise<ApolloServer<ExpressContext>> => {
    
    const typeDefs = `#graphql
      type ToDo {
        id: ID!
        text: String!
        completed: Boolean!
      }

      type Query {
        todos: [ToDo]!
      }

      type Mutation {
        addToDo(
          text: String!,
          completed: Boolean!
        ): ToDo!

        updateToDo(
          id: ID!,
          text: String,
          completed: Boolean
        ): ToDo!

        deleteToDo(
          id: ID!
        ): Boolean!
      }
    `;
    
    const resolvers = {
        Query: {
            todos: async () => {
              const todos = await db.ToDo.findAll();
              return todos.map(todo => todo.toJSON());
            },
        },
        Mutation: {
            addToDo: async (_: any, { text, completed }: Omit<ToDoAttributes, 'id'>) => {
              const todo = await db.ToDo.create({ text, completed });
              return todo.toJSON();
            },
            updateToDo: async (_: any, { id, text, completed }: ToDoAttributes) => {
                const todo = await db.ToDo.findByPk(id);
                if (!todo) throw new Error('ToDo not found');
                if (text !== undefined) todo.text = text;
                if (completed !== undefined) todo.completed = completed;
                await todo.save();
                return todo.toJSON();
            },
            deleteToDo: async (_: any, { id }: Pick<ToDoAttributes, 'id'>) => {
                const todo = await db.ToDo.findByPk(id);
                if (!todo) throw new Error('ToDo not found');
                await todo.destroy();
                return true;
            },
        },
    };

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/graphql' });
    return apolloServer;
};
