    var play=false;
    var score=0;
    var time;
    var correct;
    var action;
    var pos;
    document.getElementById("startreset").onclick=function()
    {

    if (play==true)
    {location.reload();}
    else 
    {
        play=true;        
        score=0;
        display("scorevalue",score);
        time=60;
        show("timeremaining") 
        display("timeremainingvalue",time)
        display("startreset","reset game")
        hide("gameOver");    
        countdown(); 
        generateQA();      
    }

    }
    function countdown()
    {
    action=setInterval(function(){counter()},1000);     
    }
    function counter()
    {
        time-=1; 
        display("timeremainingvalue",time);
        if (time==0)
            {
            clearInterval(action);
            show("gameOver");
            display("gameOver"," <br />Game over <br /> your score is : " + score)   
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            display("startreset","Start Game");    
            }
        }
    function show(Id)
    {
    document.getElementById(Id).style.display="block"; 
    }
    function hide(Id)
    {
    document.getElementById(Id).style.display="none"; 
    }
    function display(id,text)
    {
    document.getElementById(id).innerHTML=text;  
    }

    function generateQA()
    {
    var x=random();
    var y=random();
    correct=x*y;
    display("question",x + "x" + y);
    pos=1+Math.round(3*Math.random())
    display("box"+pos,correct);
     for(var i=1;i<5;i++)
      {
        if(i!=pos)
        {      
        var j=random()*random();
        display("box"+i,j);    
        }
      }
    }
    function random()
    {
       var temp=1+Math.round(9*Math.random());
       return temp;    
    }

    var k;
    for( k=1;k<5;k++)
        {
            document.getElementById("box"+k).onclick=function()
                {
                  if(play==true)
                      {
                         if(this.innerHTML==correct) 
                            {
                                score++;
                                display("scorevalue",score); 
                                show("correct");
                                hide("wrong");
                                setTimeout(function(){hide("correct");},1000);
                                generateQA();

                            }
                          else
                              { 
                                show("wrong");
                                hide("correct");
                                setTimeout(function(){hide("wrong");},1000);

                              }
                      }
                }
        }


