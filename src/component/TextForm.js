import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const [Counttext, setCountText] = useState('Empty');

    //handling uppercase
    const handeluppercaseclick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Text coverting to upperCase", "Sucess");
    }
    // handling lower case
    const handellowercaseclick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Text coverting to lowerCase", "Sucess");
    }
    // handling clear text button
    const handelclearclick = ()=>{
        setText("");
        props.showAlert("Clearing all text", "Sucess");
    }

    // handling copy text button
    const handelcopy = ()=>{
        console.log("I am copy");
        var txt = document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert("Copy text", "Sucess");
    }

    // handling Count Word text
    const handelclearclick2 = ()=>{
        setCountText("");
        props.showAlert("Clearing all text", "Sucess");  
    }

    // handling count word case
    const handelCountwordclick =()=>{
        let a = text.split(" ");
        let countword = 0;
        for(let i = 0; i < a.length; i++)
        {
            if(a[i] === Counttext)
            {
                countword++;
            }
        }
        setCountText('Total no of words '+ Counttext +' is '+countword);
        countword = 0;
    }

    // reversing the string
    const handelreverseclick = ()=>{
        console.log("Hello ");
        let a = text.split(" ");
        let ans="";
        for(let i = a.length-1; i >= 0; i--)
        {
            ans = ans + " "+ a[i];
        }
        setText(ans.trim());
        props.showAlert("Reversing all text", "Sucess");
    }
    
    //first form
    const handelOnchange1 = (event)=>{
        setText(event.target.value)
    }
    
    // Second form
    const handelOnchange2 = (event)=>{
        setCountText(event.target.value)
    }


    return (
        <div>
            <div className="container" style={{color:props.Mode === 'dark'?'white':'black'}}>
                <h3>{props.heading}</h3>
                <div className="mb-2 my-2">
                        <label htmlFor="myBox" className="form-label">{props.subheading} </label>
                        <textarea className="form-control" value={text} onChange={handelOnchange1} id="myBox" rows="15" style={{backgroundColor:props.Mode === 'dark'?'black':'white', color: props.Mode === 'dark'? 'white':'black'}}></textarea>
                    <buttton className="btn btn-primary my-2" onClick={handeluppercaseclick}>Upper Case</buttton>
                    <buttton className="btn btn-primary my-2 mx-2" onClick={handellowercaseclick}>Lower Case</buttton>
                    <buttton className="btn btn-primary my-2 mx-2" onClick={handelreverseclick}>Reverse String</buttton>
                    <buttton className="btn btn-primary my-2 mx-2" onClick={handelclearclick}>Clear</buttton>
                    <buttton className="btn btn-primary my-2 mx-2" onClick={handelcopy}>Copy</buttton>
                     {/*count text word*/}
                    <div className="mb-3 my-3">
                        <label htmlFor="countText" className="form-label">Count Word</label>
                        <input type="text" className="form-control" value={Counttext} onChange={handelOnchange2} id="countText" style={{backgroundColor:props.Mode === 'dark'?'black':'white', color: props.Mode === 'dark'? 'white':'black'}} placeholder="Enter" />
                    </div>
                    <buttton className="btn btn-primary my-2 mx-2" onClick={handelCountwordclick}>Count</buttton>
                    <buttton className="btn btn-primary my-2 mx-2" onClick={handelclearclick2}>Clear</buttton>
                </div>
            </div>
            <div className="container my-1" style={{color:props.Mode === 'dark'?'white':'black'}}>
                <h3>Your Text Summary</h3>
                <p>{text === ''? 0 : text.trim().split(" ").length} words, {text.length} characters.</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}