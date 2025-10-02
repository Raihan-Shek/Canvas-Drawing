// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

// const msg = document.getElementById("msg");
// const inp = document.getElementById("inp");

// const min = document.getElementsByClassName("btn1");
// const pls = document.getElementsByClassName("btn2");
// const change = document.getElementById("change");
// const color = document.getElementById("color");

// let tog = false;
// let bop = 2;
// msg.innerText = bop;
// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;
// let lines = [];
// resizeCanvas();
// let clr = color.value;

// // --- Button controls ---
// min[0].addEventListener("click", () => {
//   bop = Math.max(1, bop - 1);
//   inp.value = bop;
//   msg.innerText = bop;
// });

// pls[0].addEventListener("click", () => {
//   bop = Math.min(100, bop + 1);
//   inp.value = bop;
//   msg.innerText = bop;
// });

// inp.addEventListener("change", () => {
//   bop = parseInt(inp.value, 10);
//   msg.innerText = bop;
// });

// // --- Drawing Events ---
// canvas.addEventListener("mousedown", (e) => {
//   isDrawing = true;
//   const rect = canvas.getBoundingClientRect();
//   lastX = e.clientX - rect.left;
//   lastY = e.clientY - rect.top;
// });

// canvas.addEventListener("mousemove", (e) => {
//   if (!isDrawing) return;
//   const rect = canvas.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   // Save line with style info
//   lines.push({ x1: lastX, y1: lastY, x2: x, y2: y, color: clr, width: bop });

//   ctx.beginPath();
//   ctx.moveTo(lastX, lastY);
//   ctx.lineTo(x, y);
//   ctx.strokeStyle = clr;
//   ctx.lineWidth = bop;
//   ctx.stroke();

//   if (tog === true) {
//     lastX = x;
//     lastY = y;
//   }
// });

// color.addEventListener("change", () => {
//   clr = color.value;
// });

// canvas.addEventListener("mouseup", () => (isDrawing = false));
// canvas.addEventListener("mouseleave", () => (isDrawing = false));
// window.addEventListener("resize", resizeCanvas);
// change.addEventListener("click", toggle);

// // --- Redraw all saved lines ---
// function redraw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   for (let l of lines) {
//     ctx.beginPath();
//     ctx.moveTo(l.x1, l.y1);
//     ctx.lineTo(l.x2, l.y2);
//     ctx.strokeStyle = l.color;
//     ctx.lineWidth = l.width;
//     ctx.stroke();
//   }
// }

// function toggle() {
//   tog = !tog;
// }

// function clearCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   lines = []; // also clear history
// }

// function resizeCanvas() {
//   canvas.width = window.innerWidth - 50;
//   canvas.height = window.innerHeight - 60;
//   redraw();
// }


const canvas=document.getElementById("myCanvas");const ctx=canvas.getContext("2d");const msg=document.getElementById("msg");const inp=document.getElementById("inp");const min=document.getElementsByClassName("btn1");const pls=document.getElementsByClassName("btn2");const change=document.getElementById("change");const color=document.getElementById("color");let tog=false;let bop=2;msg.innerText=bop;let isDrawing=false;let lastX=0;let lastY=0;let lines=[];resizeCanvas();let clr=color.value;min[0].addEventListener("click",()=>{bop=Math.max(1,bop-1);inp.value=bop;msg.innerText=bop});pls[0].addEventListener("click",()=>{bop=Math.min(100,bop+1);inp.value=bop;msg.innerText=bop});inp.addEventListener("change",()=>{bop=parseInt(inp.value,10);msg.innerText=bop});canvas.addEventListener("mousedown",e=>{isDrawing=true;const rect=canvas.getBoundingClientRect();lastX=e.clientX-rect.left;lastY=e.clientY-rect.top});canvas.addEventListener("touchstart",e=>{e.preventDefault();isDrawing=true;const rect=canvas.getBoundingClientRect();const touch=e.touches[0];lastX=touch.clientX-rect.left;lastY=touch.clientY-rect.top},{passive:false});canvas.addEventListener("mousemove",e=>{if(!isDrawing)return;const rect=canvas.getBoundingClientRect();const x=e.clientX-rect.left;const y=e.clientY-rect.top;lines.push({x1:lastX,y1:lastY,x2:x,y2:y,color:clr,width:bop});ctx.beginPath();ctx.moveTo(lastX,lastY);ctx.lineTo(x,y);ctx.strokeStyle=clr;ctx.lineWidth=bop;ctx.stroke();if(tog===true){lastX=x;lastY=y}});canvas.addEventListener("touchmove",e=>{if(!isDrawing)return;e.preventDefault();const rect=canvas.getBoundingClientRect();const touch=e.touches[0];const x=touch.clientX-rect.left;const y=touch.clientY-rect.top;lines.push({x1:lastX,y1:lastY,x2:x,y2:y,color:clr,width:bop});ctx.beginPath();ctx.moveTo(lastX,lastY);ctx.lineTo(x,y);ctx.strokeStyle=clr;ctx.lineWidth=bop;ctx.stroke();if(tog===true){lastX=x;lastY=y}});color.addEventListener("change",()=>{clr=color.value});canvas.addEventListener("mouseup",()=>isDrawing=false);canvas.addEventListener("touchend",()=>isDrawing=false);canvas.addEventListener("mouseleave",()=>isDrawing=false);canvas.addEventListener("touchcancel",()=>isDrawing=false);window.addEventListener("resize",resizeCanvas);change.addEventListener("click",toggle);function redraw(){ctx.clearRect(0,0,canvas.width,canvas.height);for(let l of lines){ctx.beginPath();ctx.moveTo(l.x1,l.y1);ctx.lineTo(l.x2,l.y2);ctx.strokeStyle=l.color;ctx.lineWidth=l.width;ctx.stroke()}}function toggle(){tog=!tog}function clearCanvas(){ctx.clearRect(0,0,canvas.width,canvas.height);lines=[]}function resizeCanvas(){canvas.width=window.innerWidth-50;canvas.height=window.innerHeight-60;redraw()}