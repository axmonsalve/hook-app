import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
  test('Debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('Debe de tener el counter en 100', () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test('El counter debe de incrementar en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  test('El counter debe de decrementar en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test('El counter debe de reestablecer su valor', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement, reset } = result.current;

    act(() => {
      decrement();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(10);
  });
});
