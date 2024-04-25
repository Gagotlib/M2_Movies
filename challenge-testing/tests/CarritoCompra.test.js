const CarritoCompra = require('../index')

describe('La clase CarritoCompra: ', () => {
  const newCarrito = new CarritoCompra()

  it('esta definida', () => {
    expect(CarritoCompra).toBeDefined()
  })
  it('es una clase', () => {
    expect(typeof CarritoCompra).toBe('function')
  })
  it('contiene los 4 metodos', () => {
    expect(typeof newCarrito.constructor).toBe('function')
    expect(typeof newCarrito.agregarProducto).toBe('function')
    expect(typeof newCarrito.calcularTotal).toBe('function')
    expect(typeof newCarrito.aplicarDescuento).toBe('function')
  })
})
describe('El metodo constructor', () => {
  const newCarrito = new CarritoCompra()

  it('esta definido', () => {
    expect(typeof newCarrito.constructor).toBe('function')
  })
  it('devuelva un array y vacio', () => {
    expect(Array.isArray(newCarrito.carrito)).toBe(true)
    expect(newCarrito.carrito.length).toBe(0)
  })
})
describe('El metodo agregarProducto', () => {
  const newCarrito = new CarritoCompra()

  it('esta definido', () => {
    expect(typeof newCarrito.agregarProducto).toBe('function')
  })
  it('agrega un producto al carrito', () => {
    const producto1 = { name: 'producto1', quantity: 1, price: 10 }
    newCarrito.agregarProducto(producto1)

    expect(newCarrito.carrito.length).toBe(1)
    expect(newCarrito.carrito[0]).toEqual(producto1)
  })
  it('devuelve un error si no recibe producto como argumento', () => {
    expect(() => newCarrito.agregarProducto()).toThrowError()
  })
})
describe('El metodo calcularTotal, ', () => {
  const newCarrito = new CarritoCompra()

  it('esta definido', () => {
    expect(typeof newCarrito.calcularTotal).toBe('function')
  })
  it('devuelve 0 si no hay productos en el carrito', () => {
    expect(newCarrito.calcularTotal()).toBe(0)
  })
  it('devuelve la suma total del carrito', () => {
    const producto1 = { name: 'producto1', quantity: 1, price: 10 }
    const producto2 = { name: 'producto2', quantity: 2, price: 2 }
    newCarrito.agregarProducto(producto1)
    newCarrito.agregarProducto(producto2)

    expect(newCarrito.calcularTotal()).toBe(14)
  })
})
describe('El metodo aplicarDescuento, ', () => {
  const newCarrito = new CarritoCompra()

  it('esta definido', () => {
    expect(typeof newCarrito.aplicarDescuento).toBe('function')
  })
  it('debe arrojar error si el porcentaje es incorrecto', () => {
    expect(() => newCarrito.aplicarDescuento()).toThrowError(Error)
    expect(() => newCarrito.aplicarDescuento(-10)).toThrowError(Error)
    expect(() => newCarrito.aplicarDescuento(130)).toThrowError(Error)
    expect(() => newCarrito.aplicarDescuento('cincuenta')).toThrowError(Error)
  })
  it('debe aplicar correctamente el descuento', () => {
    const producto1 = { name: 'producto1', quantity: 1, price: 10 }
    const producto2 = { name: 'producto2', quantity: 2, price: 2 }
    newCarrito.agregarProducto(producto1)
    newCarrito.agregarProducto(producto2)

    //! esto es una forma
    // let total = newCarrito.calcularTotal()
    // total = newCarrito.aplicarDescuento(100)
    // expect(total).toBe(0)
    // let total2 = newCarrito.calcularTotal()
    // total2 = newCarrito.aplicarDescuento(50)
    // expect(total2).toBe(7)
    //! esto es otra forma
    expect(() => newCarrito.aplicarDescuento(100).toBe(0))
    expect(() => newCarrito.aplicarDescuento(50).toBe(7))
    expect(() => newCarrito.aplicarDescuento(20).toBe(11.2))
    expect(() => newCarrito.aplicarDescuento(0).toBe(14))
  })
})
