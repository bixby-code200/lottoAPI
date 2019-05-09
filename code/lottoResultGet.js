module.exports.function = function lottoResultGet (lottoTurn) {
  const http = require('http')
  const console = require('console')
  
  const time = Date.now()
  let turn = Math.ceil((Math.floor(time/1000/60/60/24) - 12029) / 7)
  if (lottoTurn) {
    turn = lottoTurn.toString()
  }
  
  const url = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo='
  const response = http.getUrl(url + turn, {format: 'json'})
  
  const lottoNumber = []
  lottoNumber.push(response.drwtNo1)
  lottoNumber.push(response.drwtNo2)
  lottoNumber.push(response.drwtNo3)
  lottoNumber.push(response.drwtNo4)
  lottoNumber.push(response.drwtNo5)
  lottoNumber.push(response.drwtNo6)
  
  let lottoResult = lottoNumber.join(', ')
  const bonusNumber = response.bnusNo
  const lottoDate = response.drwNoDate
  
  const resultStructure = {
    lottoResult: lottoResult,
    bonusNumber: bonusNumber,
    lottoTurn: turn,
    lottoDate: lottoDate
  }
  return resultStructure;
}
