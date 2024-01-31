function labels(tagname, attrname, attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;
}

function linebreak(tagname){
    var br= document.createElement(tagname);
    return br;
}

function button(tagname,content,onclick,foo){
    var btn = document.createElement(tagname)
    btn.innerHTML=content;
    return btn;
}

var email = labels("label","for","email","Email");
var br = linebreak("br");
var input= inputs("input","type","email","name","email","id","email");
var br1 = linebreak("br");
var pass = labels("label","for","password","Password");
var br2= linebreak("br");
var input1= inputs("input","type","password","name","password","id","password");
var br3= linebreak("br");
var fname = labels("label","for","name","Firstname");
var br4= linebreak("br");
var nameinput1 = inputs("input","type","firstname","name","firstname","id","firstname");
var br5= linebreak("br");
var mname = labels("label","for","name","Middlename");
var br6= linebreak("br");
var nameinput2 = inputs("input","type","middlename","name","middlename","id","middlename");
var br7= linebreak("br");
var lname = labels("label","for","name","Lastname");
var br8= linebreak("br");
var nameinput3 = inputs("input","type","lastname","name","lastname","id","lastname");
var br9 =linebreak("br");
var btn1 = button("button","Submit","onclick","foo"); 
document.body.append(fname,br4,nameinput1,br5,mname,br6,nameinput2,br7,lname,br8,nameinput3,br3,email,br,input,br1,pass,br2,input1,br9,btn1);