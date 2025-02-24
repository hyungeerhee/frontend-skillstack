//1
function helloName(x: string): void {
  console.log('안녕하세요' + x)
}
helloName('이현기')

//2
function count(x: string | number): number {
  return x.toString().length
}

//3
function 내함수(x: number | string) {
  let array: number[] = []
  array[0] = x as number
}
