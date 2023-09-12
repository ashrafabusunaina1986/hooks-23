import classes from './input.module.css'
const Input =props=>{

    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.input.title}</label>
            <input {...props.input} />
        </div>
        
    )
}
export default Input