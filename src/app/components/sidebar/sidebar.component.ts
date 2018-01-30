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
        {name:"Text Inputs",url:"TextInputs", childrens: [{
          name:"Text Inputs",url:"TextInputs", childrens: []}
        ]},
        {name:"Email Inputs",url:"TextInputs",  childrens: [{
          name:"Text Inputs",url:"TextInputs", childrens: []}
        ]},
        {name:"Password Inputs",url:"TextInputs", childrens: []},
        {name:"Number Inputs",url:"TextInputs", childrens: []},
        {name:"TextArea Inputs",url:"TextInputs", childrens: []},
        {name:"Checkgroup",url:"TextInputs", childrens: []}
      ]
    },
    {
      name:"DropDown",
      url:"",
      childrens:[
        {name:"Basic",url:"TextInputs", childrens: []},
        {name:"Filter Search",url:"TextInputs",  childrens: [{
          name:"Text Inputs",url:"TextInputs", childrens: []}
        ]},
        {name:"Multi Search",url:"TextInputs",  childrens: [{
          name:"Text Inputs",url:"TextInputs", childrens: []}
        ]},
      ]
    },
    {
      name:"Data Grid",
      url:"",
      childrens:[
        {name:"Data Grid",url:"TextInputs", childrens: []},
        {name:"Data Grid Templates",url:"TextInputs", childrens: []},
        {name:"Data Grid Filters",url:"TextInputs", childrens: []}
      ]
    },
    {
      name:" Trees",
      url:"",
      childrens:[
        {name:"Tree View",url:"TextInputs", childrens: []},
        {name:"Tree View with  Templates",url:"TextInputs", childrens: []},
        {name:"Tree View with Filters",url:"TextInputs", childrens: []}
      ]
    },
    {
      name:" Carousel View",
      url:"",
      childrens:[
        {name:"Image Carousel",url:"TextInputs", childrens: []},
        {name:"Content Carousel",url:"TextInputs", childrens: []}
       ]
    },
    {
      name:"Button",
      url:"",
      childrens:[
        {name:"Button",url:"TextInputs", childrens: []},
        {name:"Button Group",url:"TextInputs", childrens: []},
        {name:"Button Dropdown",url:"TextInputs", childrens: []}
       ]
    }
  ];


  constructor() {  }

  ngOnInit() {
  }

}
