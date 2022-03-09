

interface IProps {
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


const TextInput: React.FC<IProps> = ({ placeholder, value, onChange }: IProps) => {
    return (
        <input type="text" className="form-control" placeholder={placeholder} value={value} onChange={onChange} />
    )
}

export default TextInput;