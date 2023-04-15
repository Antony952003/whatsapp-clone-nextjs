import { Circle } from "better-react-spinkit"

function Loading() {
  return (
    <center style={ 
      {display: "grid", 
    placeItems:"center" , 
    height:"100vh"}
     }>
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/018/930/748/original/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
        height={200}
        style={{ marginBottom:10 }}
        />
        <Circle color='#3CBC28' size={60} />
      </div>
    </center>
  )
}

export default Loading
