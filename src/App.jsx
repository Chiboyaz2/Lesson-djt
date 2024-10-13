import Hero from "./component/Hero";
import Button from "./fragment/Button";
import HeroOne from './assets/images/hero-one.jpg'
import HeroTwo from './assets/images/hero-two.jpg'
import HeroThree from './assets/images/hero-three.jpg'

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-[#000]">
      Hello world!
      </h1>

      <div className="flex flex-row gap-8 m-8 p-6">
      <Button title='Click Me!'/>

      <Button title='Testing'/>

      <Button title='Boring'/>

      <Button title='Pass on '/>

      <Button title='Date'/>

      <Button title='Date'/>
      
      <Button title='Title'/>
      
      <Button title='Month'/>
      
      <Button title='Checking'/>
      </div>

      <div className="flex flex-col gap-4 m-4 p-2">
        <Hero 
        title='First'
        paragraph='Testing first paragraph'
        content='This content is only for hero 1'
        image={HeroOne}/>
        <Hero 
        title='Second'
        paragraph='Testing second paragraph'
        image={HeroTwo}/>
        <Hero 
        title='Third'
        paragraph='Testing third paragraph' image={HeroThree}/>
       
      </div>

      
    </div>

  )
}