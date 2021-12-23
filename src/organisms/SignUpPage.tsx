
import React from 'react';
import { Button } from '../atom/Button';
import '../css/signUpForm.css'
import { PopUpWindow } from '../molecules/PopUpWindow';

interface SignUpPageProp {
    displayHandler: React.Dispatch<React.SetStateAction<boolean>>
}
export const SignUpPage = ({ displayHandler }: SignUpPageProp) => {
    const createAccount = (event: React.ChangeEvent<any>) => {
        let data = ['a,b', 'b,c', 'c,d'];

        data.map((item) => console.log(item));

        console.log("login button clicked")

        const elements = event.target.elements
        const firstName = elements.firstName.value
        const lastName = elements.lastName.value
        const dateOfBirth = elements.dateOfBirth.value
        const email = elements.emailId.value
        console.log(firstName, " ", lastName, " Email ", email)
    }

    return (
        <PopUpWindow parentStateUpdater={displayHandler} className={'popUpImage'}>


                <div className="signUpForm">
                    <form onSubmit={createAccount}>
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td><label>First Name:</label></td>
                                </tr>
                                <tr>
                                    <td><input type="text" name="firstName"></input></td>
                                </tr>
                                <tr>
                                    <td><label>Last Name:</label></td>
                                </tr>

                                <tr>

                                    <td><input type="text" name="lastName"></input></td>
                                </tr>
                                <tr>
                                    <td><label>Date Of Birth:</label></td>
                                </tr>
                                <tr>

                                    <td><input type="date" name="dateOfBirth"></input></td>
                                </tr>
                                <tr><td><label>Email Id:</label> </td></tr>
                                <tr>

                                    <td><input type="email" name="emailId"></input></td>
                                </tr>
                                <tr></tr>
                            </tbody>
                        </table>
                        <br />
                        <div className= 'signUpFormButtons'>
                            <Button title="Submit" className='submit' type="Submit" onClick={() => { }}></Button>
                            &nbsp;
                            <Button title="Cancel" className='cancel' type="button" onClick={() => { displayHandler(false) }}></Button>
                        </div>
                    </form>
                </div>
           
        </PopUpWindow>




    )
}


