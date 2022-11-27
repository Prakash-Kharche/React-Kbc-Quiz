import React, { useState, useRef } from "react";
import "./Kbc.css"
import { Data } from "./Data";
import $ from "jquery"

let ans1 = 0;
let ans2 = 0;
let ans3 = 0;
let ans4 = 0;
let ans5 = 0;

export default function Kbc() {

    let a1 = useRef(null);
    let a2 = useRef(null);
    let a3 = useRef(null);
    let a4 = useRef(null);
    let a5 = useRef(null);

    let b1 = useRef(null);
    let b2 = useRef(null);
    let b3 = useRef(null);
    let b4 = useRef(null);
    let b5 = useRef(null);

    let c1 = useRef(null);
    let c2 = useRef(null);
    let c3 = useRef(null);
    let c4 = useRef(null);
    let c5 = useRef(null);

    let d1 = useRef(null);
    let d2 = useRef(null);
    let d3 = useRef(null);
    let d4 = useRef(null);
    let d5 = useRef(null);

    let [point, setPoint] = useState(0)
    window.addEventListener("load", function(){
        $(".one").slideDown()
        $(".two").slideUp(0)
        $(".three").slideUp(0)
        $(".four").slideUp(0)
        $(".five").slideUp(0)
        $(".submit").hide()
    })
 

    function CAns() {

        if (a1.current.checked) {
            ans1 = 2
            
            $(".one").slideUp(1000).css("background-color","green")
            $(".two").slideDown(2500)
        } else {
            ans1 = 0
            $(".one").slideUp(1000).css("background-color","red")
            $(".two").slideDown(2500)
        }
      
        // --------------------------------

        if (a2.current.checked) {
            ans2 = 2
            $(".two").slideUp(1000).css("background-color","green")
            $(".three").slideDown(2500)
        } else if(b2.current.checked || c2.current.checked || d2.current.checked){
            ans2 = 0
            $(".two").slideUp(1000).css("background-color","red")
            $(".three").slideDown(2500)
        }

        // -----------------------------------
       
        if (a3.current.checked) {
            ans3 = 2
            $(".three").slideUp(1000).css("background-color","green")
            $(".four").slideDown(2500)
        } else if(b3.current.checked || c3.current.checked || d3.current.checked) {
            ans3 = 0
            $(".three").slideUp(1000).css("background-color","red")
            $(".four").slideDown(2500)
        }

        // -----------------------------------
       
        if (a4.current.checked) {
            ans4 = 2
            $(".four").slideUp(1000).css("background-color","green")
            $(".five").slideDown(2500)
        } else if( b4.current.checked || c4.current.checked || d4.current.checked) {
            ans4 = 0
            $(".four").slideUp(1000).css("background-color","red")
            $(".five").slideDown(2500)
        }

        // -----------------------------------
      
        if (a5.current.checked) {
            ans5 = 2
            $(".five").slideUp(1000).css("background-color","green")
            $(".submit").slideDown(2500)
        } else if( b5.current.checked || c5.current.checked || d5.current.checked){
            ans5 = 0
            $(".five").slideUp(1000).css("background-color","red")
            $(".submit").slideDown(2500)
        }

    }


    function Submit(e) {
        setPoint(ans1 + ans2 + ans3 + ans4 + ans5);
        e.preventDefault()
    }
 

    return (
        <div>
            <form onSubmit={Submit}>
                <table cellSpacing="20">
                    <div className="one main">
                        <tr>
                            <th colSpan="3">{Data[0].Q}</th>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={b1} />{Data[0].Answer[0].text}</td>
                            <td></td>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={c1} />{Data[0].Answer[1].text} </td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="true" onChange={CAns} ref={a1} />{Data[0].Answer[2].text} </td>
                            <td></td>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={d1} />{Data[0].Answer[3].text} </td>
                        </tr>
           
                    </div>
                    {/* --------------------- 1 -------------------- */}
                    <div className="two main">
                        <tr>
                            <th colSpan="3">{Data[1].Q}</th>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={b2} />{Data[1].Answer[0].text}</td>
                            <td></td>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={c2} />{Data[1].Answer[1].text} </td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={d2} />{Data[1].Answer[2].text} </td>
                            <td></td>
                            <td> <input type="checkbox" value="true" onChange={CAns} ref={a2} />{Data[1].Answer[3].text} </td>
                        </tr>
                    </div>
                    {/* --------------------- 2 -------------------- */}
                    <div className="three main">
                        <tr>
                            <th colSpan="3">{Data[2].Q}</th>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="true" onChange={CAns} ref={a3} />{Data[2].Answer[0].text}</td>
                            <td></td>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={b3} />{Data[2].Answer[1].text} </td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={c3} />{Data[2].Answer[2].text} </td>
                            <td></td>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={d3} />{Data[2].Answer[3].text} </td>
                        </tr>
                    </div>
                    {/* --------------------- 3 -------------------- */}
                    <div className="four main">
                        <tr>
                            <th colSpan="3">{Data[3].Q}</th>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={b4} />{Data[3].Answer[0].text}</td>
                            <td></td>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={c4} />{Data[3].Answer[1].text} </td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="true" onChange={CAns} ref={a4} />{Data[3].Answer[2].text} </td>
                            <td></td>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={d4} />{Data[3].Answer[3].text} </td>
                        </tr>
                    </div>
                    {/* --------------------- 4 -------------------- */}
                    <div className="five main">
                        <tr>
                            <th colSpan="3">{Data[4].Q}</th>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={b5} />{Data[4].Answer[0].text}</td>
                            <td></td>
                            <td> <input type="checkbox" value="true" onChange={CAns} ref={a5} />{Data[4].Answer[1].text} </td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={c5} />{Data[4].Answer[2].text} </td>
                            <td></td>
                            <td> <input type="checkbox" value="false" onChange={CAns} ref={d5} />{Data[4].Answer[3].text} </td>
                        </tr>
                    </div>
                    {/* --------------------- 5 -------------------- */}
                </table>
                <input type="submit" className="submit" value="Submit" />
            </form>

            <p className="points"> {point}</p>
            <p className="score"> 10 </p>

        </div>
    )
}