import React from 'react'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap'

export default function Search() {
    return (
        <>
            <div className="search-wrapper">
                <Form>
                    <InputGroup className="">
                        {/* <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="All"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#link">Action</Dropdown.Item>
                        <Dropdown.Item href="#link">Another action</Dropdown.Item>
                        <Dropdown.Item href="#link">Something else here</Dropdown.Item>
                        <Dropdown.Item href="#link">Separated link</Dropdown.Item>
                    </DropdownButton> */}
                        <InputGroup.Prepend>
                            <Form as="select">
                                <option>All</option>
                                <option>Weekly Ad</option>
                                <option>Investor</option>
                                <option>Factory Direct</option>
                                <option>farmers direct</option>
                                <option>Export </option>
                                <option>Travel/Ticket</option>
                            </Form>
                        </InputGroup.Prepend>
                        <FormControl aria-describedby="basic-addon1" placeholder="What are you looking for or search by image" />
                        <InputGroup.Append>
                            <input type="file" name="a" />
                            <Button type="submit" variant=""><i className="fas fa-search"></i></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>
        </>
    )
}
