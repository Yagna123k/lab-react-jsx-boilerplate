import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {

  let img_arr = imageData()
  
  return (
    <>
    <h1>Kalvium Gallery</h1>
    <div className='parent_div'>
      {/* <img src={img_arr[0].img} className='image_div' alt="" />
      <img src={img_arr[1].img} className='image_div' alt="" />
      <img src={img_arr[2].img} className='image_div' alt="" />
      <img src={img_arr[3].img} className='image_div' alt="" /> */}
      {img_arr.map(item=>{
        return (
          <img src={item.img} alt='elphant' className='image_div'></img>
        )
      })}
    </div>
    </>
  )
}

export default App;
