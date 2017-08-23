import { createSelector } from "reselect";

export const todoItems = state => state.todo;

export const itemsDone = createSelector([todoItems], todoItems =>
  todoItems.reduce((result, item) => result + (item.done ? 1 : 0), 0)
);
