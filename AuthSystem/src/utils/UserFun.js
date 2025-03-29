//otp generate
//expire time

const OTPGenerate = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const expireTime=()=>{
    let time = new Date();
     return time.setMinutes(time.getMinutes() + 5);
}


export { OTPGenerate,expireTime}