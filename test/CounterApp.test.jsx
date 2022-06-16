import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en CounterApp", () => {
  /**
   * Prueba 1: Comprobar que el valor del contador es el valor inicial
   */

  // valor de entrada
  const initialValue = 10;
  test("El componente debe hacer match con el snapshot", () => {
    // obtengo el valor contenedor del componente
    const { container } = render(<CounterApp value={initialValue} />);
    // comparo el valor contenedor con el snapshot
    expect(container).toMatchSnapshot();
  });

  /**
   * Prueba 2: CounterApp debe mostrar el valor de 100
   */
  test("El componente debe mostrar el valor de 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText("100")).toBeTruthy();
  });

  /**
   * Prueba 3: CounterApp debe incrementar el valor del contador
   */
  test("El componente debe incrementar el valor del contador", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText("11")).toBeTruthy(); // la prueba simula el incremento
  });

  /**
   * Prueba 4: CounterApp debe decrementar el valor del contador
   */
  test("El componente debe decrementar el valor del contador", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-")); // la prueba simula ese decremento
    expect(screen.getByText("9")).toBeTruthy();
  });

  /**
   * Prueba 5
   */
  const newValue = 5;
  test("El componente debe decrementar el valor del contador", () => {
    render(<CounterApp value={newValue} />);
    fireEvent.click(screen.getByText("-")); // la prueba simula ese decremento
    expect(screen.getByText("4")).toBeTruthy();
  });

});
