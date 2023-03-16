import Image from "./Components/Image/Image.js"
import Button from "./Components/Button/Button.js"
import Text from "./Components/Text/Text.js";
import Header from "./Components/Form/Header/Header.js"
import Input from "./Components/Form/Input/Input"
import LoginButton from "./Components/Form/LoginButton/LoginButton.js"
import Footer from "./Components/Form/Footer/Footer"
import './App.css';
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0)

  const foto = ["https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/12_BUGATTI_Roadster_launch-set.jpg?VersionId=sQCUndcBQiUtaIGkOBsJqeuoo8sUCBne", "https://www.bugatti.com/fileadmin/_processed_/sei/p54/se-image-26f4049136006a72792649cf7cb7845e.jpg", "https://www.bugatti.com/fileadmin/_processed_/sei/p54/se-image-4799f9106491ebb58ca3351f6df5c44a.jpg", "https://i.gaw.to/content/photos/56/01/560176-cette-bugatti-chiron-devient-la-voiture-neuve-la-plus-chere-vendue-a-un-encan.jpg?1024x640"]


  function handleButton() {
    setCount(count + 1)
    if (count === foto.length - 1) {
      setCount(count * 0)
    }
  }

  return (
    <div className="box">
      <div className="container">

        <div className="image-box">
          <Image pic={foto[count]} />
          <Button change={handleButton} />
        </div>

        <div className="text-box">
          <Text />
        </div>

        <div className="form-box">
          <div>
            <Header />
            <Input />
            <LoginButton />
            <Footer/>

            
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
