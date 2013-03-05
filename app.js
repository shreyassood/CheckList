var ver = 2;
if(typeof(Storage)!=="undefined")
{
console.log('Storage supported')
o_ver = localStorage.ver
console.log(o_ver)
if (o_ver == ver){
console.log("Same version")
}
else{
console.log("Diff version")
var retrievedObject = localStorage.getItem('list');
list = ('retrievedObject: ', JSON.parse(retrievedObject))
if (o_ver == 1){
console.log(o_ver)
for (var i = 0;i<list.length;i++){
list[i]["title"] = list[i]["data"]
delete list[i]["data"]
}
}
else{
localStorage.clear();
}
localStorage.ver = ver
}
var stat = localStorage.en
if (stat){
console.log(o_ver)
console.log('Set up')
var retrievedObject = localStorage.getItem('list');
list = ('retrievedObject: ', JSON.parse(retrievedObject))
display()
}
else{
console.log('Not Set up')
localStorage.en = true;
list = [{ 'data': 'Sample Task', 'id': 1, 'checked':false}];
addtolist("",1,"none",list[0])
update()
console.log('Set up')
}
  }
else
  {
alert('You need a better browser!')
window.close();
  }
function update(){
localStorage.setItem('list', JSON.stringify(list));
}
function addtolist(x,i,to,item){
var con = document.getElementById('list')
con.innerHTML += '\
<li id="' + i + '">\
<p class="l" onclick="check(' + i + ')">\
<input type="checkbox"'+ x + ' class="c" id="' + i + 'c">\
<span class="title" id="' + i + 't" style="max-width:100px;text-decoration:' + to + '">'
 + item['data'] + 
'</p>\
<p class="r">\
<span onclick="del(' + i + ')" style="color:red;">&#10006;</span>\
</p>\
<div style="clear: both;"></div>\
</li>\
'
}
function add(){
var data = prompt("Enter Title")
if (data==null){return}
else if(data==""){alert("An empty task? What for?");return;}
var i = list.length + 1
var newItem = { 'data': data, 'id':i,'checked':false};
list.push(newItem);
var con = document.getElementById('list')
var x = ""
var to = "none"
var item = newItem
addtolist(x,i,to,item)
update()
}
function del(index){
var i = index - 1
list.splice(i, 1);
var elem = document.getElementById(index);
elem.parentNode.removeChild(elem);
update()
}
function clearall(){
list = [];
update()
document.getElementById('list').innerHTML = ""
}
function display(){
for (var i = 0;i<list.length;i++){
var checked = list[i]["checked"]
var id = list[i]["id"]
var to;
var x;
var item = list[i];
if (checked){
to = "line-through"
x = "checked='checked'"
}
else{
to = "none"
x = ""
}
addtolist(x,id,to,item)
}
}
function check(id){
var i = id - 1
var ix = id + "c"
var cbox = document.getElementById(ix)
var ch = list[i]["checked"]
if (ch){
cbox.checked = false;
list[i]["checked"] = false;
var n = id + "t"
document.getElementById(n).style.textDecoration = "none"
}
else{
cbox.checked = true;
list[i]["checked"] = true;
var n = id + "t"
document.getElementById(n).style.textDecoration = "line-through"
}
update()
}