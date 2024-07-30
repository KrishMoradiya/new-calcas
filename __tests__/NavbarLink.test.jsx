
import {describe, expect, test} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react';
import items from '../packages/calcas-theme/src/components/navbar/navbar-data/menu-item';
import NavbarLinks from "calcas-theme/src/components/navbar/navbar/NavbarLinks";
import React from 'react';
import Navbar from "calcas-theme/src/components/navbar/navbar/Navbar";

describe('Navbar Links',()=>{


    it('Check All Navbar label is present or not',async ()=>{
        render(<Navbar items={items} />);
        const navbarLinks = await screen.getAllByRole('link');
        items.forEach((navigationLink,index)=>{
            expect(navigationLink.label).toBe(navbarLinks[index].id)
        })
    });
    it('Check All NavbarLinks present or not',async ()=>{
        render(<Navbar items={items} />);
        const navbarLinks = await screen.getAllByRole('link');
        items.forEach((navigationLink,index)=>{
            expect("http://localhost"+navigationLink.key).toBe(navbarLinks[index].href)
        })
    });
    it('Check if link hover than expand Icon is visible or not',async ()=>{
        const navbarElement = render(<Navbar items={items} />);
        let expandMoreIcons = navbarElement.getAllByTestId('ExpandMoreIcon');
        expect(expandMoreIcons).toHaveLength(4)
        expandMoreIcons.forEach((icon,index)=>{
            expect(icon).toBeInTheDocument()
        })
        // await fireEvent.mouseEnter(navbarElement.getByText(/Insurance/i))
        await fireEvent.click(expandMoreIcons[0])
        expandMoreIcons = navbarElement.getAllByTestId('ExpandMoreIcon');
        expect(expandMoreIcons).toHaveLength(3)
        expect(navbarElement.getAllByTestId('ExpandLessIcon')).toHaveLength(1)
    });
    it('Check navbar link is Working after click or not',async ()=>{
        const navbarElement = render(<Navbar items={items} />);
        const insuranceLink = navbarElement.getByText(/Insurance/i)
        fireEvent.mouseEnter(insuranceLink);
        const menu = screen.getByRole('menu')
        console.log("Menu Box is: ",menu)
        expect(menu).toBeInTheDocument()
        expect(screen.getAllByRole('link',{name:/RV/i})).toHaveLength(1)
    });
})