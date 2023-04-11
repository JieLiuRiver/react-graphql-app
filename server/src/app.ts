import express from "express";
import logger from "morgan";
import * as path from "path";
import { init as initGraphql } from './graphql';

import { errorHandler, errorNotFoundHandler } from "./middleware/errorHandler";

import { index } from "./routes/index";
import initializeDatabase from "./database";

export const app = express();

const initApp = async() => {
  const db = initializeDatabase('todos');
  await db.sequelize.sync();
  console.log('Database is ready.');
  await initGraphql(app, db);
  // Express configuration
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "pug");
  
  app.use(logger("dev"));
  
  app.use(express.static(path.join(__dirname, "../public")));
  app.use("/", index);
  
  app.use(errorNotFoundHandler);
  app.use(errorHandler);
};

initApp();


