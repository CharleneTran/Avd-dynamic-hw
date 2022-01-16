import styled from "styled-components";
import SassButton from "../comps/SassButton"
import { useTheme } from "../utils/provider"

export default function SassPage() {
  const {setTheme} = useTheme();
    return (
      <div>
        <SassButton />
        <button 
          onClick={()=>setTheme('autumn')}
          style={{
            margin: 25,
            borderRadius: 20,
            width: "10em",
            height: 40,
            border: "2px solid #E09D60",
          }}>AUTUMN MODE
        </button>

        <button onClick={()=>setTheme('spring')}      
        style={{
          margin: 20,
          border: "2px solid palevioletred",
          borderRadius: 20,
          width: "10em",
          height: 40,
        }}>SPRING MODE</button>
      </div>
    )
}


