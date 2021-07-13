import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {
  test('Debe de retornar el estado por defecto ', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('Debe de Agregar un TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Comprar algo pal pan',
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    const state = todoReducer(demoTodos, action);
    // expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('Debe borrar un ToDo', () => {
    //action.payload = id del todo
    const action = {
      type: 'delete',
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);
    //   expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]]);
  });

  test('Debe hacer el toogle del ToDo', () => {
    //action.payload = id del todo
    const action = {
      type: 'toggle',
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);
    //   expect(state.length).toBe(1);

    expect(state[0].done).toBe(false);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
