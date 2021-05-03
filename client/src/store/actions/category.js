// actions ini akan terpakai ketika category sudah menggunakan database. (sekarang masih statis)

export function setLoadingCategory(payload) {
  return { type: 'loadingCategory/setLoadingCategory', payload }
}

export function setErrorCategory(payload) {
  return { type: 'errorCategory/setErrorCategory', payload }
}