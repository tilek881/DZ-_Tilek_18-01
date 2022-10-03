const accounts=[{AccountNo:"4894894894984",Currency:"KGS"},{AccountNo:"148964894898",Currency:"USD"},{AccountNo:"1561515610313",Currency:"RUB"},{AccountNo:"48974987894561465",Currency:"EUR"},{AccountNo:"1564848468",Currency:"KGS"},{AccountNo:"7894510215613215",Currency:"KZT"},{AccountNo:"489486486484948",Currency:"KGS"},{AccountNo:"7894510215613215",Currency:"CHY"},]

function valute(item){
  let result = item.filter(val => val.Currency  !== 'KGS')

  return console.log(result);
}

valute(accounts)