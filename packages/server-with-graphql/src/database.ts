import { Sequelize, Model, DataTypes, ModelCtor } from 'sequelize';

export interface ToDoAttributes {
  id: number,
  text: string;
  completed: boolean;
}

export interface ToDoInstance extends Model<ToDoAttributes>, ToDoAttributes {}

export interface DBType {
  sequelize: Sequelize,
  ToDo: ModelCtor<ToDoInstance>
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

  return {
    sequelize,
    ToDo,
  };
}
