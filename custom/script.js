



const btn = document.querySelector(".btn");

    btn.addEventListener("click", async function(){
        feedback = await axios.get("http://localhost:2000/states")
        console.log(feedback.data.data);
        resultObjs = await feedback.data.data

        let table = `<table>
        <thead>
            <th>State</th>
            <th>Capital</th>
           
        </thead>
        <tbody>
        `
        resultObjs.forEach(resultObj =>{ 
            //console.log(resultObj);
            let state = resultObj.state.name;
            let capital = resultObj.state.capital;
          
    
            table += `<tr>
            
                        <td>${state}</td>
                        <td>${capital}</td>
                       
                    </tr>`;
    
        })
    
        //the ending part of the table
        table += `</tbody></table>`;
    

        document.querySelector(".all-states").innerHTML = table
    })

   