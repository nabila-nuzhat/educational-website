function showDateTime(){
    const now = new Date();

    const showOnPage = now.toLocaleString();

    document.querySelector("#today").textContent = showOnPage;
    console.log(document.querySelector("#today").textContent);
    
}

showDateTime();
setInterval(showDateTime, 1000);