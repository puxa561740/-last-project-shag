import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={ error+ " " + (hasError ? error : "")}>
            <div>
                {children}
            </div>
            {hasError && <div className={error}><span>{error}</span></div>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props) => {
    
    const {input, meta, child, ...restProps} = props;
    
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder, name, validators, component, props = {}, text = "", className=null) => (
    <div className={className}>
        <Field placeholder={placeholder} 
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> <span>{text}</span>
    </div>
);