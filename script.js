var ip;
fetch('https://ifconfig.me/ip').then(res => res.text()).then(data => ip = data);
function send(){
  alert(ip);
  let req = new XMLHttpRequest();
  req.open("POST", "https://discord.com/api/webhooks/803856738791981108/X4ZKThI27w7EagPQ6n1GvOybOxy0EWv2H8kVNrwj-c38wIEI90tEqoXAk5-9kbwx3prR");
  req.setRequestHeader('Content-type', 'application/json');
  let params = {
    username: ip,
    avatar_url: "",
    content: (document.getElementById('input').value)
  }
  req.send(JSON.stringify(params));
}
