import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("retornaArreglo debe retornar un objeto", () => {
    const [letras, numeros] = retornaArreglo();
    expect(letras).toEqual('ABC');
    expect(numeros).toEqual(123);

    // probar tipos de dato
    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");

    // probar que el tipo sea correcto con cualquier valor
    expect(letras).toEqual(expect.any(String));
  });

  test("usState debe retornar un objeto", () => {
    
  });
});
