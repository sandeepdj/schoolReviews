import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name:string;
  key: string = 'childrens';
   

    
   
     menuList :Array<Object> = [ {
      name:"Input Components",
      url:"",
      childrens:[
        {name:"Text Inputs",url:"TextInputs"},
        {name:"Email Inputs",url:"TextInputs"},
        {name:"Password Inputs",url:"TextInputs"},
        {name:"Number Inputs",url:"TextInputs"},
        {name:"TextArea Inputs",url:"TextInputs"},
        {name:"Checkgroup",url:"TextInputs"}
      ]
    },
    {
      name:"DropDown",
      url:"",
      childrens:[
        {name:"Basic",url:"TextInputs"},
        {name:"Filter Search",url:"TextInputs"},
        {name:"Multi Search",url:"TextInputs"}
      ]
    },
    {
      name:"Data Grid",
      url:"",
      childrens:[
        {name:"Data Grid",url:"TextInputs"},
        {name:"Data Grid Templates",url:"TextInputs"},
        {name:"Data Grid Filters",url:"TextInputs"}
      ]
    },
    {
      name:" Trees",
      url:"",
      childrens:[
        {name:"Tree View",url:"TextInputs"},
        {name:"Tree View with  Templates",url:"TextInputs"},
        {name:"Tree View with Filters",url:"TextInputs"}
      ]
    },
    {
      name:" Carousel View",
      url:"",
      childrens:[
        {name:"Image Carousel",url:"TextInputs"},
        {name:"Content Carousel",url:"TextInputs"}
       ]
    },
    {
      name:"Button",
      url:"",
      childrens:[
        {name:"Button",url:"TextInputs"},
        {name:"Button Group",url:"TextInputs"},
        {name:"Button Dropdown",url:"TextInputs"}
       ]
    }
 ,
    {
      name:"Input Components",
      url:"",
      childrens:[
        {name:"Text Inputs",url:"TextInputs"},
        {name:"Email Inputs",url:"TextInputs"},
        {name:"Password Inputs",url:"TextInputs"},
        {name:"Number Inputs",url:"TextInputs"},
        {name:"TextArea Inputs",url:"TextInputs"},
        {name:"Checkgroup",url:"TextInputs"}
      ]
    },
    {
      name:"DropDown",
      url:"",
      childrens:[
        {name:"Basic",url:"TextInputs"},
        {name:"Filter Search",url:"TextInputs"},
        {name:"Multi Search",url:"TextInputs"}
      ]
    },
    {
      name:"Data Grid",
      url:"",
      childrens:[
        {name:"Data Grid",url:"TextInputs"},
        {name:"Data Grid Templates",url:"TextInputs"},
        {name:"Data Grid Filters",url:"TextInputs"}
      ]
    },
    {
      name:" Trees",
      url:"",
      childrens:[
        {name:"Tree View",url:"TextInputs"},
        {name:"Tree View with  Templates",url:"TextInputs"},
        {name:"Tree View with Filters",url:"TextInputs"}
      ]
    },
    {
      name:" Carousel View",
      url:"",
      childrens:[
        {name:"Image Carousel",url:"TextInputs"},
        {name:"Content Carousel",url:"TextInputs"}
       ]
    },
    {
      name:"Button",
      url:"",
      childrens:[
        {name:"Button",url:"TextInputs"},
        {name:"Button Group",url:"TextInputs"},
        {name:"Button Dropdown",url:"TextInputs"}
       ]
    }
  ];


  constructor() {  }

  ngOnInit() {
  }

}
