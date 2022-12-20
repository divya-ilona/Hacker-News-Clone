const  time=(time)=>{
    let temp="";
    for(let i=0;i<10;i++)
    {
      temp+=time[i];
    }
    temp+=" | ";
    for(let i=11;i<16;i++)
    {
      temp+=time[i];
    }
    return temp;
}
export default time;