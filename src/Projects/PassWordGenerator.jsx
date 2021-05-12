import React , {useState , useEffect} from 'react'

export const PassWordGenerator = () => {

    const [checkboxes, setCheckboxes] = useState({alpha:false , number:false  , SC:false}) ; 
    const [password , setPassword] = useState('') ; 
    const [input , setInput] = useState('') ; 
    const [color, setColor] = useState('#FFFFFF') ; 
    const Alphabets = 'abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ' ; 
    const numbers = '1234567890' ; 
    const specialCharacters = '!@#$%^&*()' ; 
    const handleSubmit = (e) => {
        e.preventDefault() ; 
        if(isNaN(input)){
            alert('Invalid Length!')
        }
        else if(!checkboxes.alpha&&!checkboxes.number&&!checkboxes.SC){
            alert('Please Select A field') ; 
        }
        else {
            let arr = [] ; 
            if(checkboxes.alpha){
                arr.push('alpha')

            }
            if(checkboxes.number){
                arr.push('number') ; 
            }
            if(checkboxes.SC){
                arr.push('SC')
            }
            let word = '' ; 
            while (word.length !== Number(input)) {
                let randomField = arr[Math.floor(Math.random()*arr.length)] ; 
                switch (randomField) {
                    case 'alpha':
                        word += Alphabets[Math.floor(Math.random()*Alphabets.length)] ;
                        break ;  
                    case 'number' :
                        word += numbers[Math.floor(Math.random()*numbers.length)] ; 
                        break ; 
                    case 'SC':
                        word += specialCharacters[Math.floor(Math.random()*specialCharacters.length)]; 
                    default : 

                }
                
            }
            console.log(word);
            setPassword(word) ;  
        }
    }
    useEffect(() => {
        document.body.style.backgroundColor = color ; 
    } , [color])

    return(
    
        <React.Fragment>
            <center><h1>Password Generator</h1></center>
            <h2>Criterias</h2>
            <form onSubmit ={handleSubmit}>
            <div className="cont">
        <input type="checkbox" name="" id=""  
        checked = {checkboxes.alpha}
        onChange = {() => setCheckboxes({...checkboxes , alpha:!checkboxes.alpha})}
        
        /><span>Should Contain Alphabets</span><br />
        </div>
        <div className="cont">
        <input type="checkbox" name="" id="" 
        checked = {checkboxes.number}
        onChange = {(e) => setCheckboxes({...checkboxes , number:!checkboxes.number}) }
        
        /><span>Should Contain Numbers</span> <br />
        </div>
        <div className="cont"><input type="checkbox" name="" id=""
        checked = {checkboxes.SC}
        onChange = {() => setCheckboxes({...checkboxes , SC:!checkboxes.SC})}
        
        /><span>Should Contain Special Characters</span></div>
        <h2>What should Be the lengh of your password ?( number expected )</h2>
        <input type="text" style = {{marginLeft:'10px'}} 
        value = {input}
        onChange = {(e) => setInput(e.target.value) }
        /> <br /><br />
        <button type="submit" className="btn" style = {{marginLeft:10}}>Submit</button>
        </form>

        <center>
            <div className="answer">{password}</div>
            <br></br>
            <h1>Customize</h1>
            <input type="color" name="" id=""
            value = {color} 
            onChange = {(e) => setColor(e.target.value)}
            />
            <br />
            <h3> Click on the box and adjust the background color according to your taste.</h3>


        </center>

        </React.Fragment>
    )
}
