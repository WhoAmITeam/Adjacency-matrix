function matrix()
{
    let n=document.getElementById("n").value;
    n=Math.round(Number(n));
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (n>=2 && n<26) 
    {
  
        document.body.append(document.createElement("table"));
        for (let i=0; i<=n; i++)
        {
            document.getElementsByTagName("table")[0].append(document.createElement("tr"));
            for (let j=0; j<=n; j++)
            {
                document.getElementsByTagName("tr")[i].append(document.createElement("td"));
            
            }
        }
        for (let j=0; j<(n+1)*(n+1); j++)
            {
                try
                {
                    document.getElementsByTagName("td")[j].append(document.createElement("p"));
                }
                catch 
                {
                    break;
                }
            }

        for (let i=1; i<=n; i++) 
        {
            document.getElementsByTagName("p")[i+2].textContent='\u00A0'+str[i-1];

        }

        for (let j=1; j<=n; j++)
        {          
            document.getElementsByTagName("p")[j*(n+1)+2].textContent=str[j-1];
        }

        document.getElementsByTagName("p")[2].textContent="#";

        for (let j=1; j<=n; j++)
        {
            for (let i=1; i<=n; i++)
            {
                document.getElementsByTagName("p")[j*(n+1)+i+2].append(document.createElement("input"));
            }
        }

        for (let i=0; i<n*n; i++)
        {          
            document.getElementsByTagName("input")[i+1].setAttribute("type","number");
            document.getElementsByTagName("input")[i+1].style.width="34px";
        }

        document.body.append(document.createElement("button"));
        document.getElementsByTagName("button")[1].textContent="Graph";
        document.getElementsByTagName("button")[1].addEventListener("click", graph);

    
    }
    else
    {
        alert("Error n");
        return;
    }
}


function rand(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  
}


function graph()
{
    let n=Math.round(Number(document.getElementsByTagName("input")[0].value))
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let point=new Array(n);

    for (let i=0; i<n; i++)
    {
        point[i]=new Array(2);
        point[i][0]=0;
        point[i][1]=0;
    }
    

    


    document.body.append(document.createElement("canvas"));
    document.getElementsByTagName("canvas")[0].setAttribute("width","400");
    document.getElementsByTagName("canvas")[0].setAttribute("height","400");

    let canvas = document.getElementsByTagName("canvas")[0];
    if (canvas.getContext) 
    {
        let ctx = canvas.getContext('2d');
        let radius=20;
        for (let i=0; i<n; i++)
        {
            let x, y;
            x=rand(50, 350);
            y=rand(50, 350);
            point[i][0]=x;
            point[i][1]=y;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2*Math.PI);
            ctx.stroke();
            ctx.closePath();
            ctx.font = "22px serif";
            ctx.fillText(str[i], x-7,y+7); 
        }

        let ik=0;
        let jk=0;

        for (let i=0; i<n*n; i++)
        {
            let value=0;
            let valueStr=document.getElementsByTagName("input")[i+1].value;
            if  (valueStr=="") { value=0; }
            else { value=Number(valueStr); } 
                  
            ik=Math.floor(i/n);
            jk=i-ik*n;

            if (value>0)
            {
                ctx.beginPath();
                ctx.moveTo(point[ik][0], point[ik][1]);
                ctx.lineTo(point[jk][0], point[jk][1]);
                ctx.stroke();
                ctx.closePath();
            }
            
            
        }

        

      
    }




}


//document.getElementsByTagName("button")[0].addEventListener("onclick", matrix());


/*
function matrix()
{
    let n=document.getElementById("n").value;
    n=Math.round(Number(n));
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (n>=2 && n<26)
        {
            document.body.append(document.createElement("table"));
                for (let i=0; i<=n; i++)
            {
                document.getElementsByTagName("table")[0].append(document.createElement("tr"));
                    for (let j=0; j<=n; j++)
                    {
                        document.getElementsByTagName("tr")[i].append(document.createElement("td"));
                    }
                }

                for (let j=0; j<(n+1)*(n+1); j++)
                {
                    try
                    {
                        document.getElementsByTagName("td")[j].append(document.createElement("p"));
                    }
                    catch
                    {
                        break;
                    }
                }

                for (let i=1; i<=n; i++)
                {
                    document.getElementsByTagName("p")[i+2].textContent='_' + str[i-1];
                }
                for (let j=1; j<=n; j++)
                {
                    document.getElementsByName("p")[j*(n+1)+2].textContent=str[j-1];
                }

                document.getElementById("p")[2].textContent="#";

                for (let j=1; j<=n; j++)
                {
                    for (let i=1; i<=n; i++)
                    {
                        document.getElementById("p")[j*(n+1)+i+2].append(document.createElement("input"));
                    }
                }

                for (let i=0; i<=n*n; i++)
                {
                    document.getElementsByTagName("input")[i+1].setAttribute("type, number")
                    document.getElementsByTagName("input")[i+1].style.width="34px"
                }

                document.body.append(document.createElement("button"));
                document.getElementsByTagName("button")[1].createElement="Graph";
                document.getElementsByTagName("button")[1].addEventListener("click, graph")
        }
    else
    {
        alert("Error n");
         return;
    }
}

function rand(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function graph()
{
    let n=Math.round(Number(document.getElementsByTagName("input")[0].value))
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let point=new Array(n);

    for (let i=0; i<n; i++)
    {
        point[i].push(new Array(2));
        point[i][0]=0
        point[i][1]=0
    }

    document.body.getElementsByTagName("button")[1].after(document.createElement("canvas"));
    document.getElementsByTagName("canvas")[0].setAttribute("width", "400px");
    document.getElementsByTagName("canvas")[0].setAttribute("height", "400px");

    let canvas = document.getElementsByTagName("canvas")[0];
    if (canvas.getContext)
    {
        let ctx = canvas.getContext('2d');
        let radius = 20;
        for (let i=0; i<n; i++)
        {
            let x, y;
            x=rand(50, 350);
            y=rand(50, 350);
            point[i][0]=x;
            point[i][1]=y;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2*Math.PI);
            ctx.stroke();
            ctx.closePath
            ctx.font = "22px serif"
            ctx.fillText(str[i], x-7, y+7);

        }

        let ik=0;
        let jk=0;

        for (let i=0; i<n*n; i++)
        {
        let value=0;
        let valueStr = document.getElementsByTagName("input")[i+1].value;
            if (valueStr == "") {
                value = 0
            }
            else {
                value=Number(valueStr);
            }
            
            ik=Math.floor(i/n);
            jk=i-ik*n;

            if (value>0)
            {
                ctx.beginPath();
                moveTo(point[ik][0], point[ik][1]);
                lineTo(point[jk][0], point[jk][1]);
                ctx.stroke();
                ctx.closePath
            }
        }
    }
}

// document.getElementsByTagName("button")[0].addEventListener("onclick", matrix);
*/