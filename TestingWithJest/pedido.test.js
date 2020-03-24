const ped = require('./pedido');


test('Orden completa', () => {
  expect(ped("tacos","carne")).not.toContain(undefined);
});