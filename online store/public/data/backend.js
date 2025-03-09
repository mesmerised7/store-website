const xhr=new XMLHttpRequest();
xhr.open('GET','http://127.0.0.1:8080');
console.log(xhr.responseText);
xhr.send();