

const coll=document.getElementsByClassName("collapible__liste");
let i;

for(i=0; i < coll.length; i++){
    coll[i].addEventListener("click", function (){
        this.classlist.toggle("active");
        let content = this.nextElementibling;
        if(content.style.display === "block") {
            content.style.display ="none";}
            else {
                content.style.display = "block";
            }
        
    });
}