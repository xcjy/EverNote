export function friendlyDate(dateStr){
    let dateObj= typeof dateStr === 'object'? dateStr:new Date(dateStr)
    let time = dateObj.getTime()
    let str=''
    let now= Date.now()
    switch(true){
        case now-time< 1000*60:
        str='刚刚'
        break
        case now-time<1000*3600:
          str=Math.floor((now-time)/(60000))+"分钟前"
           break
        case now-time<1000*3600*24:
          str=Math.floor((now-time)/(1000*3600))+'小时前'
          break
        default:
          str=Math.floor((now-time)/(1000*3600*24))+'天前'

    }
    return str
}