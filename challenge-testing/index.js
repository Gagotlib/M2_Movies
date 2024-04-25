class CarritoCompra {
  // constructor(): Inicializa el carrito como un array vacío.
  constructor() {
    this.carrito = []
  }
  // agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
  agregarProducto(producto) {
    if (!producto) throw new Error('Debes usar un producto como argumento de este método')
    this.carrito.push(producto)
  }
  // calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
  calcularTotal() {
    let total = 0
    for (let producto of this.carrito) {
      total += producto.quantity * producto.price
    }
    return total
  }
  // aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
  aplicarDescuento(porcentaje) {
    if (typeof porcentaje !== 'number' || porcentaje < 0 || porcentaje > 100) {
      throw new Error('El porcentaje de descuento debe ser un número entre 0 y 100.')
    }
    const total = this.calcularTotal()
    const porcentajeDescuento = porcentaje / 100
    const descuento = total * porcentajeDescuento
    return total - descuento
  }
}

module.exports = CarritoCompra
