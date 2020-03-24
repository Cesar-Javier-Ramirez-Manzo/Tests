const aMesa=require('./abrirMesa')

test('La mesa esta disponible', () =>{
    expect(aMesa(3)).toBeTruthy();
});