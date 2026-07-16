import styles from './styles.module.css'

type InputProps = {
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
} & React.ComponentProps<'input'>

export function Input({ type, id, label, name, placeholder, ...rest }: InputProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input className={styles.input} type={type} id={id} name={name} placeholder={placeholder} {...rest}/>
    </>
  );
}