
import { MouseEventHandler, ReactElement, useState } from 'react';
import { Button } from '../atom/Button';
import '../css/popUpWindow.css'


interface PopUpWindowProp {
    children: JSX.Element
    className:any,
    /*Updates Parents state to control display of popup window */
    parentStateUpdater?: React.Dispatch<React.SetStateAction<boolean>>
}


export const PopUpWindow = ({ children, parentStateUpdater }: PopUpWindowProp): ReactElement => {

    const [isDisplayed, setIsDisplayValue] = useState(true)

    const handelCloseButton = () => {
        setIsDisplayValue(false);
        if (undefined !== parentStateUpdater) {
            parentStateUpdater(false);
        }
    }
    return <>
        {isDisplayed && <div className='popUpContainer'>
            <div className='popUp'>
            <div className='row headerImage'>
                <span className='closeButtonSpan'>
                <Button  title='X' className='closeButton'type='Button' onClick={() => { return handelCloseButton() }}/>
                </span>
            </div>
            <div className= 'row'>
            <div className='popUpChildren'>{children}</div>
            </div>
            </div>

            
            
        </div>
        }</>

}