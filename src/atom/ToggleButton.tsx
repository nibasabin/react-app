import React from "react";
import '../css/toggleButton.css'
interface ToggleButtonProp {
    /* pass roundSlider for round toggleButton */
    className?: string,
    onClick: any;
}

export const ToggleButton = ({ className, onClick }: ToggleButtonProp) => {
    return (<>
        <div className={className}>
            <input id="cmn-toggle-1" className="cmn-toggle cmn-toggle-round" type="checkbox" onClick={() => { onClick() }} />
            <label htmlFor="cmn-toggle-1"></label>
        </div>
    </>)
}