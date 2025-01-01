export default function Button({className="",
    onClick,
    type="button",
    disabled= false
}) {
    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}></button>
    )
}