// variables to store the screen, numberpad and operators

const container = document.querySelector('#numberPad');
const display = document.querySelector('#screen');
const operators = document.querySelector('#operators');

// "store" holds the numbers to be calculated "compute" stores the value of the operators 
let store=[],store2=[],store3=[],store4=[], compute=[];
let result,num1,num2,num3,num4;
let placeholder= null;

// displays the holding '0'
function zeroHolder(){
  let zeroHolder=document.createElement('p')
  zeroHolder.textContent='0';
  zeroHolder.style.fontSize='2.5em';
  display.appendChild(zeroHolder);
  placeholder="val";
}





// here is the GUI setup 
let height =448;
let width = 418-104.5;
display.style.display='flex'
display.style.flexWrap='wrap';
display.style.border='1px solid black'
display.style.height='98px'; // set to exclude the border
display.style.width='418px'; // set to exclude the border

container.style.display='flex';
container.style.flexWrap='wrap';
container.style.height=`${height}` + 'px'; // set to exclude the border
container.style.width= `${width}`+ 'px';  // set to exclude the border
container.style.border='1px solid black'
container.style.float= 'left';

operators.style.display='flex'
operators.style.flexDirection= 'column'
operators.style.height='448px'
operators.style.width='102px'
operators.style.border='1px solid black'

// Adds the buttons to the number 

    let btn7 = document.createElement("button");
    btn7.textContent='7';
    btn7.style.flexBasis=`${width/3}`+'px'
    btn7.style.height=`${height/4}` + 'px'
  container.appendChild(btn7);
  
  let btn8 = document.createElement("button");
  btn8.textContent='8';
  btn8.style.flexBasis=`${width/3}`+'px'
  btn8.style.height=`${height/4}` + 'px'
  container.appendChild(btn8);

  let btn9 = document.createElement("button");
  btn9.textContent='9';
  btn9.style.flexBasis=`${width/3}`+'px'
  btn9.style.height=`${height/4}` + 'px'
  container.appendChild(btn9);
  
  let btnDel = document.createElement("button");
  btnDel.textContent='Del';
  btnDel.style.flexBasis=`${width/4}`+'px'
  btnDel.style.height=`${height/5.3333}` + 'px'
  operators.appendChild(btnDel);

  let btn4 = document.createElement("button");
  btn4.textContent='4';
  btn4.style.flexBasis=`${width/3}`+'px'
  btn4.style.height=`${height/4}` + 'px'
  container.appendChild(btn4);

  let btn5 = document.createElement("button");
  btn5.textContent='5';
  btn5.style.flexBasis=`${width/3}`+'px'
  btn5.style.height=`${height/4}` + 'px'
  container.appendChild(btn5);


  let btn6 = document.createElement("button");
  btn6.textContent='6';
  btn6.style.flexBasis=`${width/3}`+'px'
  btn6.style.height=`${height/4}` + 'px'
  container.appendChild(btn6);


  let btnDiv = document.createElement("button");
  btnDiv.textContent='/';
  btnDiv.style.flexBasis=`${width/4}`+'px'
  btnDiv.style.height=`${height/5.3333}` + 'px'
  operators.appendChild(btnDiv);

  let btn1 = document.createElement("button");
  btn1.textContent='1';
  btn1.style.flexBasis=`${width/3}`+'px'
  btn1.style.height=`${height/4}` + 'px'
  container.appendChild(btn1);
  


  let btn2 = document.createElement("button");
  btn2.textContent='2';
  btn2.style.flexBasis=`${width/3}`+'px'
  btn2.style.height=`${height/4}` + 'px'
  container.appendChild(btn2);

  let btn3 = document.createElement("button");
  btn3.textContent='3';
  btn3.style.flexBasis=`${width/3}`+'px'
  btn3.style.height=`${height/4}` + 'px'
  container.appendChild(btn3);

  
  let btnMul = document.createElement("button");
  btnMul.textContent='X';
  btnMul.style.flexBasis=`${width/4}`+'px'
  btnMul.style.height=`${height/5.3333}` + 'px'
  operators.appendChild(btnMul);


  let btn0 = document.createElement("button");
  btn0.textContent='0';
  btn0.style.flexBasis=`${width/3}`+'px'
  btn0.style.height=`${height/4}` + 'px'
  container.appendChild(btn0);


  let btnDot = document.createElement("button");
  btnDot.textContent='.';
  btnDot.style.flexBasis=`${width*.666666}`+'px'
  btnDot.style.height=`${height/4}` + 'px'
  container.appendChild(btnDot);

  let btnSub = document.createElement("button");
  btnSub.textContent='-';
  btnSub.style.flexBasis=`${width/4}`+'px'
  btnSub.style.height=`${height/5.3333}` + 'px'
  operators.appendChild(btnSub);

  
  let btnAdd = document.createElement("button");
  btnAdd.textContent='+';
  btnAdd.style.flexBasis=`${width/4}`+'px'
  btnAdd.style.height=`${height/5.3333}` + 'px'
  operators.appendChild(btnAdd);

  let btnEqual = document.createElement("button");
  btnEqual.textContent='=';
  btnEqual.style.flexBasis=`${width/4}`+'px'
  btnEqual.style.height=`${height/4}` + 'px'
  operators.appendChild(btnEqual);




// This eventListener adds keyboard support
{
  window.addEventListener('keydown',
  function (e)
  {
   if(e.keyCode==55|| e.keyCode== 103)
   num7();

   if (e.keyCode==56 || e.keyCode==104 )
   {
     num8();
   }

   if (e.keyCode==57 || e.keyCode==105 )
   {
     num9();
  }

  if (e.keyCode==52 || e.keyCode==100 )
  {
    num4();
 }

 if (e.keyCode==53 || e.keyCode==101 )
 {
   num5();
}

if (e.keyCode==54|| e.keyCode==102 )
{
  num6();
}

if (e.keyCode==49 || e.keyCode==97 )
{
  num1();
}

if (e.keyCode==50 || e.keyCode==98 )
{
  num2();
}

if (e.keyCode==51 || e.keyCode== 99 )
{
  num3();
}

if (e.keyCode==48|| e.keyCode==96)
{
  num0();
}

if (e.keyCode==190 || e.keyCode==110)
{
  dot();
}

if (e.keyCode== 46 || e.keyCode== 8 )
{
  numDel();
}

if (e.keyCode==191|| e.keyCode==111 )
{
  numDiv();
}

if (e.key=='*' || e.keyCode==106 )
{
  numMul();
}

if (e.keyCode==189 || e.keyCode==109 )
{
  numSub();
}

if (e.key=='+' || e.keyCode== 107 )
{
  numAdd();
}

if (e.keyCode==13 || e.keyCode==13 )
{
  operateAll();
}

});
}

// add eventListeners to each button, then stores the value in 
// an array and display it on the screen

    btn7.addEventListener('click',num7);
   

      function num7(){
        // This "if statement" removes the holder 0 if it exists
        if(placeholder)
        {
          removeAllChildNodes(display)
          placeholder= null
        }

          // stores the value the digit in the correct array based on its 
          // location in the figures to be computed 
            if (!compute[0] && !compute[1]  && !compute[2] )
            {store.push('7');  }
            else 
            {if (compute[0] && !compute[1]  && !compute[2] )
              store2.push('7');  }

            if (compute[0] && compute[1] && !compute[2] )
            {store3.push('7');}
            else
            if(compute[0] && compute[1] && compute[2])
            {store4.push('7');}

        let para=document.createElement('p')
        para.textContent='7';
        para.style.fontSize='2.5em';
        display.appendChild(para);
        
      }
    btn8.addEventListener('click',num8);

    function num8(){
      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}

        // stores the value the digit in the correct array based on its 
          // location in the figures to be computed 
          if (!compute[0] && !compute[1]  && !compute[2] )
          {store.push('8');  }
          else 
          {if (compute[0] && !compute[1]  && !compute[2] )
            store2.push('8');  }

          if (compute[0] && compute[1] && !compute[2] )
          {store3.push('8');}
          else
          if(compute[0] && compute[1] && compute[2])
          {store4.push('8');}

        let para=document.createElement('p')
        para.textContent='8';
        para.style.fontSize='2.5em';
        display.appendChild(para);
      }
    btn9.addEventListener('click',num9);


    function num9(){

      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}
      
         // stores the value the digit in the correct array based on its 
          // location in the figures to be computed 
          if (!compute[0] && !compute[1]  && !compute[2] )
          {store.push('9');  }
          else 
          {if (compute[0] && !compute[1]  && !compute[2] )
            store2.push('9');  }

          if (compute[0] && compute[1] && !compute[2] )
          {store3.push('9');}
          else
          if(compute[0] && compute[1] && compute[2])
          {store4.push('9');}

        let para=document.createElement('p')
        para.textContent='9';
        para.style.fontSize='2.5em';
        display.appendChild(para);
        
      }
    btn4.addEventListener('click',num4);

    function num4(){
      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}

         // stores the value the digit in the correct array based on its 
          // location in the figures to be computed 
          if (!compute[0] && !compute[1]  && !compute[2] )
          {store.push('4');  }
          else 
          {if (compute[0] && !compute[1]  && !compute[2] )
            store2.push('4');  }

          if (compute[0] && compute[1] && !compute[2] )
          {store3.push('4');}
          else
          if(compute[0] && compute[1] && compute[2])
          {store4.push('4');}

        let para=document.createElement('p')
        para.textContent='4';
        para.style.fontSize='2.5em';
        display.appendChild(para);
        
      }
    btn5.addEventListener('click',num5);

    function num5(){

      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}
      
       
         // stores the value the digit in the correct array based on its 
          // location in the figures to be computed 
          if (!compute[0] && !compute[1]  && !compute[2] )
            {store.push('5');  }
            else 
            {if (compute[0] && !compute[1]  && !compute[2] )
              store2.push('5');  }

            if (compute[0] && compute[1] && !compute[2] )
            {store3.push('5');}
            else
            if(compute[0] && compute[1] && compute[2])
            {store4.push('5');}
  
        let para=document.createElement('p')
        para.textContent='5';
        para.style.fontSize='2.5em';
        display.appendChild(para);
        
      }
    btn6.addEventListener('click',num6);

    function num6(){

      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}
      
       
         // stores the value the digit in the correct array based on its 
          // location in the figures to be computed 
          if (!compute[0] && !compute[1]  && !compute[2] )
            {store.push('6');  }
            else 
            {if (compute[0] && !compute[1]  && !compute[2] )
              store2.push('6');  }

            if (compute[0] && compute[1] && !compute[2] )
            {store3.push('6');}
            else
            if(compute[0] && compute[1] && compute[2])
            {store4.push('6');}
  
        let para=document.createElement('p')
        para.textContent='6';
        para.style.fontSize='2.5em';
        display.appendChild(para);
        
      }
    btn1.addEventListener('click',num1);

    function num1(){
      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}
      
      
         // stores the value the digit in the correct array based on its 
          // location in the figures to be computed 
          if (!compute[0] && !compute[1]  && !compute[2] )
          {store.push('1');  }
          else 
          {if (compute[0] && !compute[1]  && !compute[2] )
            store2.push('1');  }

          if (compute[0] && compute[1] && !compute[2] )
          {store3.push('1');}
          else
          if(compute[0] && compute[1] && compute[2])
          {store4.push('1');}
  
        let para=document.createElement('p')
        para.textContent='1';
        para.style.fontSize='2.5em';
        display.appendChild(para);
        
      }
    btn2.addEventListener('click',num2);

    function num2(){

      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}
      
       
         // stores the value the digit in the correct array based on its 
          // location in the figures to be computed 
          if (!compute[0] && !compute[1]  && !compute[2] )
            {store.push('2');  }
            else 
            {if (compute[0] && !compute[1]  && !compute[2] )
              store2.push('2');  }

            if (compute[0] && compute[1] && !compute[2] )
            {store3.push('2');}
            else
            if(compute[0] && compute[1] && compute[2])
            {store4.push('2');}


        let para=document.createElement('p')
        para.textContent='2';
        para.style.fontSize='2.5em';
        display.appendChild(para);
        
      }
    btn3.addEventListener('click',num3);

    function num3(){

      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}
      
    
         // stores the value the digit in the correct array based on its 
          // location in the figures to be computed 
          if (!compute[0] && !compute[1]  && !compute[2] )
          {store.push('3');  }
          else 
          {if (compute[0] && !compute[1]  && !compute[2] )
            store2.push('3');  }

          if (compute[0] && compute[1] && !compute[2] )
          {store3.push('3');}
          else
          if(compute[0] && compute[1] && compute[2])
          {store4.push('3');}


        let para=document.createElement('p')
        para.textContent='3';
        para.style.fontSize='2.5em';
        display.appendChild(para);
        
      }
    btn0.addEventListener('click',num0);

    function num0(){

      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}
      
       
         // stores the value the digit in the correct array based on its 
          // location in the figures to be computed 
          if (!compute[0] && !compute[1]  && !compute[2] )
          {store.push('0');  }
          else 
          {if (compute[0] && !compute[1]  && !compute[2] )
            store2.push('0');  }

          if (compute[0] && compute[1] && !compute[2] )
          {store3.push('0');}
          else
          if(compute[0] && compute[1] && compute[2])
          {store4.push('0');}
  
        let para=document.createElement('p')
        para.textContent='0';
        para.style.fontSize='2.5em';
        display.appendChild(para);
        
      }

    btnDot.addEventListener('click',dot);

    function dot(){

      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}
      
       
         // stores the value the digit in the correct array based on its 
          // location in the figures to be computed 
          if (!compute[0] && !compute[1]  && !compute[2] )
          {store.push('.');  }
          else 
          {if (compute[0] && !compute[1]  && !compute[2] )
            store2.push('.');  }

          if (compute[0] && compute[1] && !compute[2] )
          {store3.push('.');}
          else
          if(compute[0] && compute[1] && compute[2])
          {store4.push('.');}
  
        let para=document.createElement('p')
        para.textContent='.';
        para.style.fontSize='2.5em';
        display.appendChild(para);
        
      }


    btnDel.addEventListener('click',numDel);
         
    
            
// this function clears the display and variables that store data
    function numDel(){
        store=[],store2=[],store3=[],store4=[], compute=[];
        result=null;
        removeAllChildNodes(display);
        zeroHolder();
    }


    // ************These store the operator in 
    // the array "compute" and display it on the screen*********


    btnDiv.addEventListener('click',numDiv);
    function numDiv(){
      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}

        compute.push('/');
        let para=document.createElement('p')
        para.textContent='/';
        para.style.fontSize='2.5em';
        display.appendChild(para);
    }


    btnMul.addEventListener('click',numMul);

    function numMul(){
     // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}

        compute.push('*');
        let para=document.createElement('p')
        para.textContent='*';
        para.style.fontSize='2.5em';
        display.appendChild(para);
      }
    btnSub.addEventListener('click',numSub);

    function numSub(){
      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}

        compute.push('-');
        let para=document.createElement('p')
        para.textContent='-';
        para.style.fontSize='2.5em';
        display.appendChild(para);
      }
    btnAdd.addEventListener('click',numAdd);

    function numAdd(){
      // This "if statement" removes the holder 0 if it exists
      if(placeholder)
      {removeAllChildNodes(display)
        placeholder= null}

        compute.push('+');
        let para=document.createElement('p')
        para.textContent='+';
        para.style.fontSize='2.5em';
        display.appendChild(para);
      }

      // This calls the operate function that does the computation
    btnEqual.addEventListener('click',operateAll);
  




  function operateAll()
    {

       // converts the array elements into a complete float point number if number exists
      if (store)
    {  num1=parseFloat(store.toString().split(",").join(""));}
   if(store2)
     { num2=parseFloat(store2.toString().split(",").join(""));}
   if(store3)  
     { num3=parseFloat(store3.toString().split(",").join(""));}
   if (store4)  
     { num4=parseFloat(store4.toString().split(",").join(""));}

  
    //  this section uses string templates because the number by itself generates 
    // a falsy
      if((num1 && num2)||(`'${num1}'` && `'${num2}'`)) 
     {operate(num1,num2,compute[0])}
     if (num3 || `'${num3}'`)
     operate(result,num3,compute[1])
     if (num4 || `'${num4}'`)
     operate(result,num4,compute[2])
}

// This functions calls the respective function based on the operator that has been stored
function operate(first, second, operator)
    {   
    
        if (operator=='+')
        {result= sumfunction(first,second);
            removeAllChildNodes(display);
            let para=document.createElement('p')
            para.textContent=`${result}`;
            para.style.fontSize='2.5em';
            display.appendChild(para);

            console.log(`result is: ${result}`);
        }
        if (operator=='-')
            {result=subtractFunction(first,second);
                removeAllChildNodes(display);
                let para=document.createElement('p')
                para.textContent=`${result}`;
                para.style.fontSize='2.5em';
                display.appendChild(para);
                console.log(`result is: ${result}`);}
            
        if (operator=='/')
            {
              
              result=divideFunction(first,second);
              console.log(`result is: ${result}`);
                removeAllChildNodes(display);
                let para=document.createElement('p')
                para.textContent=`${result}`;
                para.style.fontSize='2.5em';
                display.appendChild(para);
                }

        if (operator=='*')
            {result=multiplyFunction(first,second);
                removeAllChildNodes(display);
                let para=document.createElement('p')
                para.textContent=`${result}`;
                para.style.fontSize='2.5em';
                display.appendChild(para);
                console.log(`result is: ${result}`);
              }   
    }


{    
function sumfunction(num1,num2)
{
    let result=num1+num2
    return result;
}

function subtractFunction(num1,num2)
{

    return (num1-num2);
}

function divideFunction(num1,num2)
{   
    // This calls an error function if user attempts to divide by 0
    if (num2!= '0')
    {     
      return num1/num2;   
    }
    else
    {
       error();
    }

    
}

function multiplyFunction(num1,num2)
{
  
    return num1*num2;
}
}

// this removes all values from the display
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// This should display an error
function error()
{
  removeAllChildNodes(display);
  let para=document.createElement('p')
  para.textContent=`Error`;
  para.style.fontSize='2.5em';
  display.appendChild(para);
}