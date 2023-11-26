let RedValue , GreenValue , BlueValue;

setInterval(() => {
     RedValue = Math.floor(Math.random() * 255);
     GreenValue = Math.floor(Math.random() * 255);
     BlueValue = Math.floor(Math.random() * 255);
     document.body.style.backgroundColor = `rgba(${RedValue} , ${GreenValue} , ${BlueValue} , 0.2)`;
}, 2000);