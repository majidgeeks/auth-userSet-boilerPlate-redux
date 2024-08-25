// import React from "react";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOnboarding } from "../Redux/Actions/action";

const Onboarding = () => {
    const [radio, setRadio] = useState('');
    const dispatch = useDispatch();
    // const onBoarding = useSelector((state) => state.authReducer.onBoarding)

    const submitOnboarding = () => {
        dispatch(setOnboarding(radio))
    }

    useEffect(()=> {
        submitOnboarding;
    }, [] )

    // console.log("radio",radio)
    // console.log("onBoarding",onBoarding);

    
    return(
        <>
        <h1>on boarding screen</h1>
        <label htmlFor="">Male
        <input type="radio" name="user" id="male"
        value={'male'}
          onChange={(e) => setRadio(e.target.value)}/>
        </label>

        <label htmlFor="">Female
        <input type="radio" name="user" id="female" 
        value={'female'}
        onChange={(e) => setRadio(e.target.value)} />
        </label>
        <button type="button" onClick={submitOnboarding}>Submit </button>
        </>
    );
};

export default Onboarding;
