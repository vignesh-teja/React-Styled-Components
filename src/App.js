import {
  Heading,
  SubHeading,
  CustomButton,
  CustomBtn,
  HorizontalLine,
  OutlineButton,
} from './styledComponent'
import './App.css'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <SubHeading>Styled Components via Inline Styles</SubHeading>
    <CustomButton color="#ffffff" bgColor="#0070c1">
      Click
    </CustomButton>
    <CustomButton color="#0070c1" bgColor="#ffffff">
      Click
    </CustomButton>
    <HorizontalLine />
    <SubHeading>Styled Components via Conditional Rendering</SubHeading>
    <CustomBtn>Click Me</CustomBtn>
    <CustomBtn outline>Click Me</CustomBtn>
    <SubHeading>Styled Components via Extending Styles</SubHeading>
    <OutlineButton>Click</OutlineButton>
    <OutlineButton as="a" href="https://www.google.com/" target="_blank">
      Navigate to Google
    </OutlineButton>
  </>
)
export default App
