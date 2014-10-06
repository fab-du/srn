

$.noConflict();

webix.ui({
    view:"dataview",
    id:"my_dataview",
    width: 500, //component's dimensions
    height: 250,
    template:"<div class='webix_strong'>#title# </br> #year#.</div> Rank: #rank#",
    type:{ height: 80,
           width: 250 //dimensions of each dataview item
 
    },
    data:[
        { id:1, title:"The Shawshank Redemption", year:1994, rank:1},
        { id:2, title:"The Godfather", year:1972, rank:2},
        { id:3, title:"The Godfather: Part II", year:1974, rank:3},
        { id:4, title:"The Good, the Bad and the Ugly", year:1966, rank:4},
        { id:5, title:"My Fair Lady", year:1964, rank:5},
        { id:6, title:"12 Angry Men", year:1957, rank:6},
    ],
    datatype:"json"
});

webix.ui({
        view:"menu",
        id:"my_menu",
        subMenuPos:"right",
        layout:"y",
        data:[ //menu data
            { value:"Translate...", submenu:[ 
                        "English", "Slavic...", "German"]},
            { $template:"Separator" },
            { value:"Post...", submenu:[ "Facebook", "Google+", "Twitter" ]}
        ],
        type:{
              subsign:true,
              height:50
        }           
  });




//$('.unter_menu').css({"display":"none"});

