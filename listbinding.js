class ListBinding{
    
    constructor(element) {
        this.listElement=element;
        this.courseList=[];
    }
    update(){
        while(this.listElement.firstChild)
        this.listElement.removeChild(this.listElement.firstChild);
        //fill <ol> or <ul> tag with li 
        for(const course of this.courseList)
        this.listElement.appendChild(ListBinding.createListItem(course));    
    }
     /* create a <li></li> element tag  */
    static createListItem(text){
        const li=document.createElement("li");
        li.textContent=text;
        return li;
    }
    add(course){
        this.courseList.push(course);
        this.update();
    }
}