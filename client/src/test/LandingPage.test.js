import LandingPage from "../components/LandingPage/LandingPage";
import Enzyme, {shallow} from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({adapter: new Adapter()});

describe('LandingPage',()=>{
    it("should have an title Welcome",()=>{
        const wrapper = shallow(<LandingPage/>)
        const title = wrapper.find('div h1')
        expect(title.text()).toBe('W E L C O M E !!!')
    })
    it("should have a button Click Here",()=>{
        const wrapper = shallow(<LandingPage/>)
        const button = wrapper.find('div Link button')
        expect(button.text()).toBe("CLICK HERE")
    })
})


// import React from 'react';
// import Enzyme,  { shallow } from "enzyme";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// import LandingPage from '../components/LandingPage/LandingPage.jsx';

// Enzyme.configure({adapter: new Adapter()});

// describe('LandingPage',() => {
//     it('Renderiza 1 <div> con toda la informacion que le llega por props', () => {
//         const wrapper = shallow(<LandingPage />);
//         expect(wrapper.name()).to.equal('div');
//     })

//     it('Renderiza 1 <h1>', () => {
//         const wrapper = shallow(<LandingPage />);
//         expect(wrapper.name()).to.equal('h1');
//     })

//     it('Renderiza 1 <h2>', () => {
//         const wrapper = shallow(<LandingPage />);
//         expect(wrapper.name()).to.equal('h2');
//     })
//     })