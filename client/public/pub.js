
   let setSaveListeners = () => {setTimeout(() => {
        document.querySelectorAll('.save-btn').forEach(item => {
            item.addEventListener('click', event => {
              //handle saveBtn click
              startNotif();
            })
          });
    }, 200);
}


setTimeout(() => {
    document.querySelectorAll('.searchBtn').forEach(item => {
        item.addEventListener('click', event => {
          //handle saveBtn click
          setSaveListeners();
        })
      });
}, 200);

document.getElementById("notif")
notif.style.display = "none";

let startNotif = () => {
    let notif = document.getElementById("notif");
    notif.style.display = "block";
    setTimeout(() => {
    notif.style.display = "none";
    }, 4000);
}