import { Sequelize, Model, DataTypes, ModelCtor } from 'sequelize';

export interface UserAttributes {
  id: string,
  name: string
  todoId: number
}

export interface ToDoAttributes {
  id: number,
  text: string;
  completed: boolean;
  author?: UserAttributes
}

export interface ToDoInstance extends Model<ToDoAttributes>, ToDoAttributes {}
export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export interface DBType {
  sequelize: Sequelize,
  ToDo: ModelCtor<ToDoInstance>
  User: ModelCtor<UserInstance>
}

export default function initializeDatabase(dbName: string): DBType {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: `./${dbName}.sqlite`,
  });

  const ToDo = sequelize.define<ToDoInstance>('ToDo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  const User = sequelize.define<UserInstance>('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    todoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return {
    sequelize,
    ToDo,
    User,
  };
}
