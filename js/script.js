let username = document.getElementById('name')
        let age = document.getElementById('age')
        let select = document.getElementById('face-mask')
        
        total = 0
        allowed = 0
        denied = 0

        const checkUser = () => { 
            if(username.value === '') {
                alert("Please enter your name")
            }
            else if(age.value === '') {
                alert('Please enter your age')
            }
            else if (age.value < 12){
                alert("You must be 12 years or older to enter Ace's")
                total++
                document.getElementById('total-visitors').innerHTML =  `Total visits: ${total}` 
            }
            else if (select.value != 'Yes') {
                alert("You have been denied entry into Ace's") 

                total++
                document.getElementById('total-visitors').innerHTML =  `Total visits: ${total}`       
            }
            else{
                alert(`Welcome to Ace's, ${username.value}`)
                
                //visitors allowed entry
                allowed++
                document.getElementById('accepted').innerHTML = `Accepted visitors: ${allowed}`
                
                //all visitors
                total++
                document.getElementById('total-visitors').innerHTML =  `Total visits: ${total}`
                
                //return all field to empty/default value
                username.value = ''      
                age.value = '' 
                select.value = 'No'     
            }

            //count number of visitors denied entry
            if((username.value !== '' && age.value !== "") && (age.value < 12 || select.value !== 'Yes')){
                denied++
                document.getElementById('denied').innerHTML = `Denied visitors: ${denied}`
                
                username.value = ''      
                age.value = ''
                select.value = 'No'
            }
        }