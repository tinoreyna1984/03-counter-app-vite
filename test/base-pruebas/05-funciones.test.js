import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Tino";
    const activo = getUsuarioActivo(name);
    const activoTest = {
        uid: "ABC567",
        username: name
    };
    expect(activo).toEqual(activoTest);
  });
});
