export const memoizedGetTotalPrice = (() => {
  const cache = new Map()

  return (items: any) => {
    const cacheKey = JSON.stringify(items)

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }

    const totalPrice = items
      .filter((item: any) => item.selected)
      .reduce((total: number, current: any) => total + current.amount, 0)

    cache.set(cacheKey, totalPrice)

    return totalPrice
  }
})()

export const convertCurrency = (amount: number) => {
  const formattedAmount = amount
    ?.toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return `$${formattedAmount}`
}

export interface Extra {
  price: number
  quantity: number
}

export const totalPriceOfSelectedExtras = (items: Extra[]): number =>
  items
    .filter(({ quantity }) => quantity >= 1)
    .reduce((total, { price, quantity }) => total + price * quantity, 0)

type Item = { quantity: number }

export const totalExtraQty = (items: Item[]): number =>
  items.reduce((total, item) => total + item.quantity, 0)
