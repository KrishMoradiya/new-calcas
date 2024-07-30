import {describe, expect} from "@jest/globals";
import items from "../packages/calcas-theme/src/components/navbar/navbar-data/menu-item";
import Navbar from "calcas-theme/src/components/navbar/navbar/Navbar";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import React from "react";

const getLengthOfOneMenuSection = () => {
    let length = 0;
    items[0].children.map((section,index)=>{
        length += 1;
        section.children.map((subSection,index)=>{
            length += 1;
        });
    });
    return length;
}

describe('MenuBox test module', () => {
    it('When Link hover than menu box is open or not',async ()=>{
        const navbarElement = await render(<Navbar items={items} />);
        const insuranceLink = navbarElement.getByRole('link',{name:/Insurance/i});
        fireEvent.mouseEnter(insuranceLink);
        const menuElement = navbarElement.getByRole('menu')
        console.log(menuElement)
        expect(menuElement).toBeInTheDocument();
    });
    it('When Insurance hovered than Menu box is present in DOM or not',async ()=>{
        const navbarElement = await render(<Navbar items={items}/>)
        const insuranceLink = navbarElement.getByText(/Insurance/i);
        fireEvent.mouseEnter(insuranceLink);
        const menuElement = navbarElement.getByRole('menu');
        const presentationRoleElement = screen.getByRole('presentation')
        expect(menuElement).toBeInTheDocument();
        expect(presentationRoleElement).toBeInTheDocument();
    })
    it('When Insurance hovered than all the links of Menu box is render or not',async ()=>{
        const navbarElement = await render(<Navbar items={items}/>)
        const insuranceLink = navbarElement.getByText(/Insurance/i);
        fireEvent.mouseEnter(insuranceLink);
        const menuElement = navbarElement.getByRole('menu');
        const presentationRoleElement = await screen.getByRole('presentation')
        const linksOfSection = await presentationRoleElement.getElementsByTagName('a')
        console.log("Links of section : "+linksOfSection)
        expect(menuElement).toBeInTheDocument();
        expect(presentationRoleElement).toBeInTheDocument();
        const lengthOfLinks = getLengthOfOneMenuSection();
        expect(linksOfSection.length).toBe(lengthOfLinks);
    })

})