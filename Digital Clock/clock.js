function updateclock(){
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    let month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    let year = (now.getFullYear() % 100).toString().padStart(2, '0'); // Last two digits of the year

    const timeget = `${hours}:${minutes}:${seconds}`;
    const dateget = `${day}/${month}/${year}`;
    document.getElementById("time").textContent = timeget;
    document.getElementById("date").textContent = dateget;

    
    
}

updateclock();
setInterval(updateclock, 1000);