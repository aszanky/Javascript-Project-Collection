document.getElementById('button').addEventListener('click', hello);

// let result = {
//     displays:{
//         div: [],
//     },
//     spms: {},
//     inventories: {},
//     markets: {
//         div: [],
//     }
// }

// function hello() {

//     fetch('try.json')
//     .then((res) => res.json())
//     .then((data) => {
//         // for (var i in data) {
//         //     // result.inventories.push({
//         //     //     divname: data
//         //     // })
//         //     console.log(data.)
//         // }
//         console.log(data);
//         // data.forEach(i => {
//         //     result.displays.div.push({
//         //         divname: i.DIV_NAME,
//         //         categories: [{
//         //             title: i.TITLE,
//         //             models: [{
//         //                 modelname: i.MODELNAME,
//         //                 state: i.STATE
//         //             }]
//         //         }]
//         //     })
//         // });

//         for(var i = 0 ; i< data.length; i++) {
//             // result.displays.div.push({
//             //     divname: data[i].DIV_NAME,
//             // })

//             // if(result.displays.div.divname) {
//             //     result.displays.div.push({
//             //         categories: [{
//             //             title: data[i].TITLE,
//             //             models: [{
//             //                 modelname: data[i].MODELNAME,
//             //                 state: data[i].STATE
//             //             }]
//             //         }]
//             //     })
//             console.log(data[i].DIV_NAME)
//             }
//             // result.displays.div.push({
//             //     divname: data[i].DIV_NAME,
//             //     categories: [{
//             //         title: data[i].TITLE,
//             //         models: [{
//             //             modelname: data[i].MODELNAME,
//             //             state: data[i].STATE
//             //         }]
//             //     }]
//             // })
//         })
//         console.log(result);
//     })
//     .catch(err => console.log(err));
// }

// result.displays.div.push({
//     division: data.DIV_NAME
// })

let div = [];

function hello() {
    fetch('try.json')
    .then(res => res.json())
    .then(data => {
        // const AV = data.filter(function(e) {
        //     return e.DIV_NAME == "AV"
        // })

        // console.log(data);
        // // var divs = data.map(function(e) {
        // //     return e.DIV_NAME.filter(function(ee) {
        // //         return ee == 'AV';
        // //     });
        // // })
        // let activities = [];

        // // console.log(data);
        // // data.forEach(function(e) {
        // //     if (!(e.DIV_NAME in div)) {
        // //         div.push({
        // //             division: e.DIV_NAME
        // //         })
        // //     }
        // // });
        // // var unique = [...new Set(data.map(item => item.DIV_NAME))];
        // let hello = data.map(item => item.DIV_NAME)
        //     .filter((value, index, self) => 
        //         self.indexOf(value) === index
        //     );
        
        // hello.forEach(e => {
        //     div.push({
        //         division: e
        //     })
        // })

        // // div.forEach(e => {
        // //     if (e.divison === data.div_name)
        // // })

        // // data.forEach(e => {
        // //     if ()
        // // })

        // console.log(activities)
        // // for(var i = 0 ; i < data.length ; i++) {
        // //     // let division = data[i].DIV_NAME
        // //     // if (!(division in result.markets.div)) {
        // //     //     // result.markets.div.push({
        // //     //     //     division: division
        // //     //     // })

        // //     // }
        // //     // result.markets.div['division'] = data[i]
        // //     // for (divs in result.displays.div[i]){
        // //     //     // console.log(result.displays.div[i][divs]);
        // //     //     if (!(result.displays.div[i][divs] in ))
        // //     // }
        // // }
        // // console.log(divs)
        // console.log(result);
        console.log(data);

        // var arrayList = [], obj_c_processed = [];

        // for (var i in data) {
        //     if (data[i].DIV_NAME === "HA") {
        //         arrayList.push({
        //             division: "HA",
        //             activities:[{
        //                 title: data[i].TITLE,
        //                 BRAND: data[i].BRAND
        //             }]
        //         })
        //     } else {
        //         arrayList.push({
        //             division: "AV",
        //             activities:[{
        //                 title: data[i].TITLE,
        //                 BRAND: data[i].BRAND
        //             }]
        //         })
        //     }

        // }

        // var newObj = {};
        // for (i in data) {
        //     var item = data[i];
        //     if (newObj[item.DIV_NAME] === undefined) {
        //         newObj[item.DIV_NAME] = 0;
        //     }

        //     let tibrand = [];

        //     tibrand.push({
        //         title: item.TITLE,
        //         brand: item.BRAND
        //     })

        //     newObj['activities'] = tibrand;

        // }

        // var result = {};
        // result.rows = [];

        // for(i in newObj) {
        //     result.rows.push({
        //         division: i,
        //         // activities:[{
        //         //     title: data[i].TITLE,
        //         //     BRAND: data[i].BRAND
        //         // }]
        //     })
        // }

        // console.log(newObj);
        // console.log(result);

        // // console.log(arrayList)

        let markets = {};
        markets.div = [];

        var AV = {
            divname: 'AV',
            activities: []
        }

        var HA = {
            divname: 'HA',
            activities: []
        }

        data.forEach(e => {
            if (e.DIV_NAME === 'AV') {
                AV.activities.push({
                    title: e.TITLE,
                    brand: e.BRAND
                })
            }
            else {
                HA.activities.push({
                    title: e.TITLE,
                    brand: e.BRAND
                })
            }
        })
        
        console.log(AV);
        console.log(HA);
    })
}

document.getElementById('button2').addEventListener('click' , button2);

function button2() {
    fetch('jsont.json')
    .then(res => res.json())
    .then(data => {
        let counterTitle = -1, counterDiv = -1;
        let currentTitle = '', currentDiv = '';
        let categories = [], div = [];
        // for (let i = 0 ; i < data.length ; i++) {
        //     if (data[i].TITLE !== currentTitle) {
        //         currentTitle = data[i].TITLE;
        //         categories.push({
        //             title: currentTitle,
        //             modelsssss:[],
        //         })
        //         counterTitle++;
        //     }
        //     // if (data[i].MODELNAME !== currentModel) {
        //     //     currentModel = data[i].currentModel;
        //     //     models.push({
        //     //         modelname: currentModel,
        //     //         cwhqty: data[i].
        //     //     })
        //     // }
        //     // models.push({
        //     //     modelname: data[i].MODELNAME,
        //     //     cwhqty: data[i].CWHQTY
        //     // })

        //     categories[counterTitle].modelsssss.push({
        //         modelname: data[i].MODELNAME,
        //         cwhqty: data[i].CWHQTY
        //     })
        // }

        data.forEach(e => {
            // if (e.TITLE !== currentTitle) {
            //     currentTitle = e.TITLE;
            //     categories.push({
            //         title: currentTitle,
            //         modelsssss:[],
            //     })
            //     counterTitle++;
            // }
            // categories[counterTitle].modelsssss.push({
            //     modelname: e.MODELNAME,
            //     cwhqty: e.CWHQTY
            // })
            if (e.DIV_NAME !== currentDiv) {
                currentDiv = e.DIV_NAME;
                div.push({
                    divname: currentDiv,
                    categories: []
                })
                resetCategoriesVariables();
                counterDiv++;
            }
            if (e.TITLE !== currentTitle) {
                currentTitle = e.TITLE;
                categories.push({
                    title: currentTitle,
                    models:[]
                })
                div[counterDiv].categories = categories;
                counterTitle++;
            }

            div[counterDiv].categories[counterTitle].models.push({
                modelname: e.MODELNAME,
                cwhqty: e.CWHQTY
            })
        })

        function resetCategoriesVariables() {
            categories = [];
            currentTitle = '';
            counterTitle = -1;
        }

        var result = {
            div,
            categories,
        }
        console.log(div);
        console.log(counterTitle);
    })
}