function createDate(){
    const date = new Date()
    const monthday = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const clock = month + '/' + monthday + '/' + year.toString().slice(2, 4)
    return clock
  }
  
  export default createDate