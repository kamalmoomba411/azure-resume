window.addEventListerner('DOMContentLoaded', (event)=>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(respose => {
        console.log("Website called function API.")
        count = response.count;
        document.getElementById("counter").innerTest = count;

    }).catch(function(error){
        console.log(error);
    });
    return count;
    
}