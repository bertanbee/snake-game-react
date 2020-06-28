import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';

import './styles.css';

//import Box from './components/box/box';
//import Controls from './components/controls/controls';

function Game() {

  const [ positionState, setPositionState ] = useState({
    position1: {
      className: "little-block-selected"
    },
    position2: {
      className: "little-block"
    },
    position3: {
      className: "little-block"
    },
    position4: {
      className: "little-block"
    },
    

  });

  const lil = "little-block";
  const selec = "little-block-selected";

  function changeLeft() {
    
    if(positionState.position1.className === "little-block") {
      if(positionState.position2.className === "little-block") {
        if(positionState.position3.className === "little-block") {
          if(positionState.position4.className === "little-block") {
      
          } else {
              setPositionState({
                position1: {
                  className: lil
                },
                position2: {
                  className: lil
                },
                position3: {
                  className: selec
                },
                position4: {
                  className: lil
                },
                
            
              });
              return;
          }
      
        } else {
            setPositionState({
              position1: {
                className: lil
              },
              position2: {
                className: selec
              },
              position3: {
                className: lil
              },
              position4: {
                className: lil
              },
              
          
            });
    
            return;
        }
      } else {
        setPositionState({
          position1: {
            className: selec
          },
          position2: {
            className: lil
          },
          position3: {
            className: lil
          },
          position4: {
            className: lil
          },
          
      
        });

          return;
      }
    } else {
      setPositionState({
        position1: {
          className: lil
        },
        position2: {
          className: lil
        },
        position3: {
          className: lil
        },
        position4: {
          className: selec
        },
        
    
      });

        return;
    }
  }

  function changeRight() {
    if(positionState.position1.className === "little-block") {
      if(positionState.position2.className === "little-block") {
        if(positionState.position3.className === "little-block") {
          if(positionState.position4.className === "little-block") {
          } else {
            setPositionState({
              position1: {
                className: selec
              },
              position2: {
                className: lil
              },
              position3: {
                className: lil
              },
              position4: {
                className: lil
              },
              
          
            });
      
              return;
          }
        } else {
          setPositionState({
            position1: {
              className: lil
            },
            position2: {
              className: lil
            },
            position3: {
              className: lil
            },
            position4: {
              className: selec
            },
            
        
          });
    
            return;
        }
      } else {
        setPositionState({
          position1: {
            className: lil
          },
          position2: {
            className: lil
          },
          position3: {
            className: selec
          },
          position4: {
            className: lil
          },
          
      
        });
  
          return;
      }
    } else {
      setPositionState({
        position1: {
          className: lil
        },
        position2: {
          className: selec
        },
        position3: {
          className: lil
        },
        position4: {
          className: lil
        },
        
    
      });

        return;
    }

    
}

  return (
    <>
    <div className="BOX">
    <div className="Game">
      <div className="block">
        <div className={positionState.position1.className} id="1"></div>
        <div className={positionState.position2.className} id="2"></div>
        <div className={positionState.position3.className} id="3"></div>
        <div className={positionState.position4.className} id="4"></div>
        <div className="little-block" id="5"></div>
        <div className="little-block" id="6"></div>
        <div className="little-block" id="7"></div>
        <div className="little-block" id="8"></div>
        <div className="little-block" id="9"></div>
        <div className="little-block" id="10"></div>
        <div className="little-block" id="11"></div>
        <div className="little-block" id="12"></div>
        <div className="little-block" id="13"></div>
        <div className="little-block" id="14"></div>
        <div className="little-block" id="15"></div>
        <div className="little-block" id="16"></div>
        <div className="little-block" id="17"></div>
        <div className="little-block" id="18"></div>
        <div className="little-block" id="19"></div>
        <div className="little-block" id="20"></div>
      </div>

      <div className="block">
       <div className="little-block" id="21"></div>
        <div className="little-block" id="22"></div>
        <div className="little-block" id="23"></div>
        <div className="little-block" id="24"></div>
        <div className="little-block" id="25"></div>
        <div className="little-block" id="26"></div>
        <div className="little-block" id="27"></div>
        <div className="little-block" id="28"></div>
        <div className="little-block" id="29"></div>
        <div className="little-block" id="30"></div>
        <div className="little-block" id="31"></div>
        <div className="little-block" id="32"></div>
        <div className="little-block" id="33"></div>
        <div className="little-block" id="34"></div>
        <div className="little-block" id="35"></div>
        <div className="little-block" id="36"></div>
        <div className="little-block" id="37"></div>
        <div className="little-block" id="38"></div>
        <div className="little-block" id="39"></div>
        <div className="little-block" id="40"></div>
      </div>

      <div className="block">
        <div className="little-block" id="41"></div>
        <div className="little-block" id="42"></div>
        <div className="little-block" id="43"></div>
        <div className="little-block" id="44"></div>
        <div className="little-block" id="45"></div>
        <div className="little-block" id="46"></div>
        <div className="little-block" id="47"></div>
        <div className="little-block" id="48"></div>
        <div className="little-block" id="49"></div>
        <div className="little-block" id="50"></div>
        <div className="little-block" id="51"></div>
        <div className="little-block" id="52"></div>
        <div className="little-block" id="53"></div>
        <div className="little-block" id="54"></div>
        <div className="little-block" id="55"></div>
        <div className="little-block" id="56"></div>
        <div className="little-block" id="57"></div>
        <div className="little-block" id="58"></div>
        <div className="little-block" id="59"></div>
        <div className="little-block" id="60"></div>

      </div>
      <div className="block">
        <div className="little-block" id="61"></div>
        <div className="little-block" id="61"></div>
        <div className="little-block" id="62"></div>
        <div className="little-block" id="63"></div>
        <div className="little-block" id="64"></div>
        <div className="little-block" id="65"></div>
        <div className="little-block" id="66"></div>
        <div className="little-block" id="67"></div>
        <div className="little-block" id="68"></div>
        <div className="little-block" id="69"></div>
        <div className="little-block" id="70"></div>
        <div className="little-block" id="71"></div>
        <div className="little-block" id="72"></div>
        <div className="little-block" id="73"></div>
        <div className="little-block" id="74"></div>
        <div className="little-block" id="75"></div>
        <div className="little-block" id="76"></div>
        <div className="little-block" id="77"></div>
        <div className="little-block" id="78"></div>
        <div className="little-block" id="79"></div>

      </div>
      <div className="block">
        <div className="little-block" id="80"></div>
        <div className="little-block" id="81"></div>
        <div className="little-block" id="82"></div>
        <div className="little-block" id="83"></div>
        <div className="little-block" id="84"></div>
        <div className="little-block" id="85"></div>
        <div className="little-block" id="86"></div>
        <div className="little-block" id="87"></div>
        <div className="little-block" id="88"></div>
        <div className="little-block" id="89"></div>
        <div className="little-block" id="90"></div>
        <div className="little-block" id="91"></div>
        <div className="little-block" id="92"></div>
        <div className="little-block" id="93"></div>
        <div className="little-block" id="94"></div>
        <div className="little-block" id="95"></div>
        <div className="little-block" id="96"></div>
        <div className="little-block" id="97"></div>
        <div className="little-block" id="98"></div>
        <div className="little-block" id="99"></div>

      </div>
      <div className="block">
        <div className="little-block" id="100"></div>
        <div className="little-block" id="101"></div>
        <div className="little-block" id="102"></div>
        <div className="little-block" id="103"></div>
        <div className="little-block" id="104"></div>
        <div className="little-block" id="105"></div>
        <div className="little-block" id="106"></div>
        <div className="little-block" id="107"></div>
        <div className="little-block" id="108"></div>
        <div className="little-block" id="109"></div>
        <div className="little-block" id="110"></div>
        <div className="little-block" id="111"></div>
        <div className="little-block" id="112"></div>
        <div className="little-block" id="113"></div>
        <div className="little-block" id="114"></div>
        <div className="little-block" id="115"></div>
        <div className="little-block" id="116"></div>
        <div className="little-block" id="117"></div>
        <div className="little-block" id="118"></div>
        <div className="little-block" id="119"></div>

      </div>
      <div className="block">
        <div className="little-block" id="120"></div>
        <div className="little-block" id="121"></div>
        <div className="little-block" id="122"></div>
        <div className="little-block" id="123"></div>
        <div className="little-block" id="124"></div>
        <div className="little-block" id="125"></div>
        <div className="little-block" id="126"></div>
        <div className="little-block" id="127"></div>
        <div className="little-block" id="128"></div>
        <div className="little-block" id="129"></div>
        <div className="little-block" id="130"></div>
        <div className="little-block" id="131"></div>
        <div className="little-block" id="132"></div>
        <div className="little-block" id="133"></div>
        <div className="little-block" id="134"></div>
        <div className="little-block" id="135"></div>
        <div className="little-block" id="136"></div>
        <div className="little-block" id="137"></div>
        <div className="little-block" id="138"></div>
        <div className="little-block" id="139"></div>

      </div>
      <div className="block">
        <div className="little-block" id="140"></div>
        <div className="little-block" id="141"></div>
        <div className="little-block" id="142"></div>
        <div className="little-block" id="143"></div>
        <div className="little-block" id="144"></div>
        <div className="little-block" id="145"></div>
        <div className="little-block" id="146"></div>
        <div className="little-block" id="147"></div>
        <div className="little-block" id="148"></div>
        <div className="little-block" id="149"></div>
        <div className="little-block" id="150"></div>
        <div className="little-block" id="151"></div>
        <div className="little-block" id="152"></div>
        <div className="little-block" id="153"></div>
        <div className="little-block" id="154"></div>
        <div className="little-block" id="155"></div>
        <div className="little-block" id="156"></div>
        <div className="little-block" id="157"></div>
        <div className="little-block" id="158"></div>
        <div className="little-block" id="159"></div>

      </div>
      <div className="block">
        <div className="little-block" id="160"></div>
        <div className="little-block" id="161"></div>
        <div className="little-block" id="162"></div>
        <div className="little-block" id="163"></div>
        <div className="little-block" id="164"></div>
        <div className="little-block" id="165"></div>
        <div className="little-block" id="166"></div>
        <div className="little-block" id="167"></div>
        <div className="little-block" id="168"></div>
        <div className="little-block" id="169"></div>
        <div className="little-block" id="170"></div>
        <div className="little-block" id="171"></div>
        <div className="little-block" id="172"></div>
        <div className="little-block" id="173"></div>
        <div className="little-block" id="174"></div>
        <div className="little-block" id="175"></div>
        <div className="little-block" id="176"></div>
        <div className="little-block" id="177"></div>
        <div className="little-block" id="178"></div>
        <div className="little-block" id="179"></div>

      </div>
      <div className="block">
        <div className="little-block" id="180"></div>
        <div className="little-block" id="181"></div>
        <div className="little-block" id="182"></div>
        <div className="little-block" id="183"></div>
        <div className="little-block" id="184"></div>
        <div className="little-block" id="185"></div>
        <div className="little-block" id="186"></div>
        <div className="little-block" id="187"></div>
        <div className="little-block" id="188"></div>
        <div className="little-block" id="189"></div>
        <div className="little-block" id="190"></div>
        <div className="little-block" id="191"></div>
        <div className="little-block" id="192"></div>
        <div className="little-block" id="193"></div>
        <div className="little-block" id="194"></div>
        <div className="little-block" id="195"></div>
        <div className="little-block" id="196"></div>
        <div className="little-block" id="197"></div>
        <div className="little-block" id="198"></div>
        <div className="little-block" id="209"></div>

      </div>
      <div className="block">
        <div className="little-block" id="200"></div>
        <div className="little-block" id="201"></div>
        <div className="little-block" id="202"></div>
        <div className="little-block" id="203"></div>
        <div className="little-block" id="204"></div>
        <div className="little-block" id="205"></div>
        <div className="little-block" id="206"></div>
        <div className="little-block" id="207"></div>
        <div className="little-block" id="208"></div>
        <div className="little-block" id="209"></div>
        <div className="little-block" id="210"></div>
        <div className="little-block" id="211"></div>
        <div className="little-block" id="212"></div>
        <div className="little-block" id="213"></div>
        <div className="little-block" id="214"></div>
        <div className="little-block" id="215"></div>
        <div className="little-block" id="216"></div>
        <div className="little-block" id="217"></div>
        <div className="little-block" id="218"></div>
        <div className="little-block" id="219"></div>

      </div>
      <div className="block">
        <div className="little-block" id="220"></div>
        <div className="little-block" id="221"></div>
        <div className="little-block" id="222"></div>
        <div className="little-block" id="223"></div>
        <div className="little-block" id="224"></div>
        <div className="little-block" id="225"></div>
        <div className="little-block" id="226"></div>
        <div className="little-block" id="227"></div>
        <div className="little-block" id="228"></div>
        <div className="little-block" id="229"></div>
        <div className="little-block" id="230"></div>
        <div className="little-block" id="231"></div>
        <div className="little-block" id="232"></div>
        <div className="little-block" id="233"></div>
        <div className="little-block" id="234"></div>
        <div className="little-block" id="235"></div>
        <div className="little-block" id="236"></div>
        <div className="little-block" id="237"></div>
        <div className="little-block" id="238"></div>
        <div className="little-block" id="239"></div>

      </div>
      <div className="block">
        <div className="little-block" id="240"></div>
        <div className="little-block" id="241"></div>
        <div className="little-block" id="242"></div>
        <div className="little-block" id="243"></div>
        <div className="little-block" id="244"></div>
        <div className="little-block" id="245"></div>
        <div className="little-block" id="246"></div>
        <div className="little-block" id="247"></div>
        <div className="little-block" id="248"></div>
        <div className="little-block" id="249"></div>
        <div className="little-block" id="250"></div>
        <div className="little-block" id="251"></div>
        <div className="little-block" id="252"></div>
        <div className="little-block" id="253"></div>
        <div className="little-block" id="254"></div>
        <div className="little-block" id="255"></div>
        <div className="little-block" id="256"></div>
        <div className="little-block" id="257"></div>
        <div className="little-block" id="258"></div>
        <div className="little-block" id="259"></div>

      </div>
      <div className="block">
        <div className="little-block" id="260"></div>
        <div className="little-block" id="261"></div>
        <div className="little-block" id="262"></div>
        <div className="little-block" id="263"></div>
        <div className="little-block" id="264"></div>
        <div className="little-block" id="265"></div>
        <div className="little-block" id="266"></div>
        <div className="little-block" id="267"></div>
        <div className="little-block" id="268"></div>
        <div className="little-block" id="269"></div>
        <div className="little-block" id="270"></div>
        <div className="little-block" id="271"></div>
        <div className="little-block" id="272"></div>
        <div className="little-block" id="273"></div>
        <div className="little-block" id="274"></div>
        <div className="little-block" id="275"></div>
        <div className="little-block" id="276"></div>
        <div className="little-block" id="277"></div>
        <div className="little-block" id="278"></div>
        <div className="little-block" id="279"></div>

      </div>
      <div className="block">
        <div className="little-block" id="280"></div>
        <div className="little-block" id="281"></div>
        <div className="little-block" id="282"></div>
        <div className="little-block" id="283"></div>
        <div className="little-block" id="284"></div>
        <div className="little-block" id="285"></div>
        <div className="little-block" id="286"></div>
        <div className="little-block" id="287"></div>
        <div className="little-block" id="288"></div>
        <div className="little-block" id="289"></div>
        <div className="little-block" id="290"></div>
        <div className="little-block" id="291"></div>
        <div className="little-block" id="292"></div>
        <div className="little-block" id="293"></div>
        <div className="little-block" id="294"></div>
        <div className="little-block" id="295"></div>
        <div className="little-block" id="296"></div>
        <div className="little-block" id="297"></div>
        <div className="little-block" id="298"></div>
        <div className="little-block" id="299"></div>

      </div>
      <div className="block">
        <div className="little-block" id="300"></div>
        <div className="little-block" id="301"></div>
        <div className="little-block" id="302"></div>
        <div className="little-block" id="303"></div>
        <div className="little-block" id="304"></div>
        <div className="little-block" id="305"></div>
        <div className="little-block" id="306"></div>
        <div className="little-block" id="307"></div>
        <div className="little-block" id="308"></div>
        <div className="little-block" id="309"></div>
        <div className="little-block" id="310"></div>
        <div className="little-block" id="311"></div>
        <div className="little-block" id="312"></div>
        <div className="little-block" id="313"></div>
        <div className="little-block" id="314"></div>
        <div className="little-block" id="315"></div>
        <div className="little-block" id="316"></div>
        <div className="little-block" id="317"></div>
        <div className="little-block" id="318"></div>
        <div className="little-block" id="319"></div>

      </div>
      <div className="block">
        <div className="little-block" id="320"></div>
        <div className="little-block" id="321"></div>
        <div className="little-block" id="322"></div>
        <div className="little-block" id="323"></div>
        <div className="little-block" id="324"></div>
        <div className="little-block" id="325"></div>
        <div className="little-block" id="326"></div>
        <div className="little-block" id="327"></div>
        <div className="little-block" id="328"></div>
        <div className="little-block" id="329"></div>
        <div className="little-block" id="330"></div>
        <div className="little-block" id="331"></div>
        <div className="little-block" id="332"></div>
        <div className="little-block" id="333"></div>
        <div className="little-block" id="334"></div>
        <div className="little-block" id="335"></div>
        <div className="little-block" id="336"></div>
        <div className="little-block" id="337"></div>
        <div className="little-block" id="338"></div>
        <div className="little-block" id="339"></div>

      </div>
      <div className="block">
        <div className="little-block" id="340"></div>
        <div className="little-block" id="341"></div>
        <div className="little-block" id="342"></div>
        <div className="little-block" id="343"></div>
        <div className="little-block" id="344"></div>
        <div className="little-block" id="345"></div>
        <div className="little-block" id="346"></div>
        <div className="little-block" id="347"></div>
        <div className="little-block" id="348"></div>
        <div className="little-block" id="349"></div>
        <div className="little-block" id="350"></div>
        <div className="little-block" id="351"></div>
        <div className="little-block" id="352"></div>
        <div className="little-block" id="353"></div>
        <div className="little-block" id="354"></div>
        <div className="little-block" id="355"></div>
        <div className="little-block" id="356"></div>
        <div className="little-block" id="357"></div>
        <div className="little-block" id="358"></div>
        <div className="little-block" id="359"></div>

      </div>
      <div className="block">
        <div className="little-block" id="360"></div>
        <div className="little-block" id="361"></div>
        <div className="little-block" id="362"></div>
        <div className="little-block" id="363"></div>
        <div className="little-block" id="364"></div>
        <div className="little-block" id="365"></div>
        <div className="little-block" id="366"></div>
        <div className="little-block" id="367"></div>
        <div className="little-block" id="368"></div>
        <div className="little-block" id="369"></div>
        <div className="little-block" id="370"></div>
        <div className="little-block" id="371"></div>
        <div className="little-block" id="372"></div>
        <div className="little-block" id="373"></div>
        <div className="little-block" id="374"></div>
        <div className="little-block" id="375"></div>
        <div className="little-block" id="376"></div>
        <div className="little-block" id="377"></div>
        <div className="little-block" id="378"></div>
        <div className="little-block" id="379"></div>

      </div>
      <div className="block">
        <div className="little-block" id="380"></div>
        <div className="little-block" id="381"></div>
        <div className="little-block" id="382"></div>
        <div className="little-block" id="383"></div>
        <div className="little-block" id="384"></div>
        <div className="little-block" id="385"></div>
        <div className="little-block" id="386"></div>
        <div className="little-block" id="387"></div>
        <div className="little-block" id="388"></div>
        <div className="little-block" id="389"></div>
        <div className="little-block" id="390"></div>
        <div className="little-block" id="391"></div>
        <div className="little-block" id="392"></div>
        <div className="little-block" id="393"></div>
        <div className="little-block" id="394"></div>
        <div className="little-block" id="395"></div>
        <div className="little-block" id="396"></div>
        <div className="little-block" id="397"></div>
        <div className="little-block" id="398"></div>
        <div className="little-block" id="399"></div>

      </div>
    </div>
    </div>
    <div className="controls">
            <FaArrowLeft className="icon" onClick={() => changeLeft()}></FaArrowLeft>
            <FaArrowDown className="icon"></FaArrowDown>
            <FaArrowUp className="icon"></FaArrowUp>
            <FaArrowRight className="icon" onClick={()=>changeRight()}></FaArrowRight>
        </div>
    </>
  );
}

export default Game;
