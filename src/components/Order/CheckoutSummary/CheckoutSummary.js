import React from 'react';
import Burger from '../../Burger/Burger';
import classes from './CheckoutSummary.css';
import Button from '../../UI/Button/Button'

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We home it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.CheckoutCancelled}>CANCEL</Button> 
            <Button 
                btnType="Success"
                clicked={props.CheckoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default CheckoutSummary
