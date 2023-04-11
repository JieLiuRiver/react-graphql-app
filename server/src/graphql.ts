import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { Express } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { DBType, ToDoAttributes } from './database';

const typeDefs = fs.readFileSync(path.join(__dirname, '..', 'schema.graphql'), 'utf8');

export const init = async (app: Express, db: DBType): Promise<ApolloServer<ExpressContext>> => {
    const resolvers = {
        Query: {
            todos: async () => {
              const todos = await db.ToDo.findAll();
              return todos.map(todo => todo.toJSON());
            },
            todo: async (_: any, { id }: Pick<ToDoAttributes, 'id'>) => {
                const todo = await db.ToDo.findOne({
                    where: {
                        id,
                    },
                });
                const user = await db.User.findOne({
                    where: {
                        todoId: id,
                    },
                });
                if (user) {
                    todo.author = user;
                }
                return todo;
            },
        },
        Mutation: {
            addToDo: async (
                _: any, 
                { text, completed, authorName }: Omit<ToDoAttributes, 'id'> & { authorName?: string },
            ) => {
              const todo = await db.ToDo.create({ text, completed });
              let user: any = null;
              if (authorName) {
                 user = await db.User.create({ name: authorName, todoId: todo.id });
              }
              const result = todo.toJSON();
              result.author = user?.toJSON();
              return result;
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
