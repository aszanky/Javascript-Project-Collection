document.getElementById('testJSON').addEventListener('click', testJSON);

function testJSON() {
    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let output = `
            <h1>${data.squadName}</h1>
            <h5>Hometown: ${data.homeTown} // Formed: ${data.formed}</h5>
        `
        // data.members.forEach((val) => {
        //     // let kekuatan = [];
        //     // for(let i = 0 ; i < data.members.length; i++) {
        //     //     kekuatan.push(data.members[i].powers[i]);
        //     // }
        //     console.log(val.powers);
        //     output += `
        //         <div class='wrapper'>
        //             <h3>${val.name}</h3>
        //             <p>Secret Identity: ${val.secretIdentity}</p>
        //             <p>Age: ${val.age}</p>
        //             <p>Superpowers: </p>
        //             <ul>
        //                 <li>${val.powers}</li>
        //             </ul>
        //         </div>
        //     `
        // })

        let members = data.members;
        for (var i = 0 ; i < members.length ; i++) {
            let kekuatan = members[i].powers;
            let listOfPowers = '';


            for(let j = 0 ; j < kekuatan.length ; j++) {
                listOfPowers += `
                    <ul>
                        <li>${kekuatan[j]}</li>
                    </ul>
                `
            }

            output += `
                <div class='contents'>
                    <h3>${members[i].name}</h3>
                    <p>Secret Identity: ${members[i].secretIdentity}</p>
                    <p>Age: ${members[i].age}</p>
                    <p>Superpowers: </p>
                    ${listOfPowers}
                </div>
            `
        }

        document.getElementById('output').innerHTML = output;
    })
}