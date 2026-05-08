/* date and time */
// home page
/* function updateDateTime(){
    const toDateTime = new Date();

    const formatTimeString = toDateTime.toLocaleString();

    document.querySelector("#dateTime").textContent = formatTimeString;


} */

    // fix the same js file clashing of home and contact page ----------

    function updateDateTime(){
    const toDateTime = new Date();

    const formatTimeString = toDateTime.toLocaleString();

    const fixSameJsFileIssue = document.querySelector("#dateTime")


    if(fixSameJsFileIssue !== null){
        
    fixSameJsFileIssue.textContent = formatTimeString;
    }

}


updateDateTime();

setInterval(updateDateTime, 1000);

/* in contact form date time -------------------------*/


function showDateTime(){
    const now = new Date();

    const showOnPage = now.toLocaleString();

    const fixSameJsFileIssue = document.querySelector("#today");
   
    // console.log(document.querySelector("#today").textContent);
    if(fixSameJsFileIssue !== null){
         fixSameJsFileIssue.textContent = showOnPage;
    }
    
}

showDateTime();
setInterval(showDateTime, 1000);