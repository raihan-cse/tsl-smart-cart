import React from 'react'
import { InputGroup, DropdownButton, Dropdown, FormControl, Button } from 'react-bootstrap'

export default function Search() {
    return (
        <>
            <div className="search-wrapper my-3">
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="All"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#link">Action</Dropdown.Item>
                        <Dropdown.Item href="#link">Another action</Dropdown.Item>
                        <Dropdown.Item href="#link">Something else here</Dropdown.Item>
                        <Dropdown.Item href="#link">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-describedby="basic-addon1" placeholder="What are you looking for or search by image"/>
                    <InputGroup.Append>
                    <input type="file" name="a" />
                        <Button type="submit" variant=""><i class="fas fa-search"></i></Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </>
    )
}
