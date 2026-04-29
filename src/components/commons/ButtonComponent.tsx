
type ButtonType = {
    children: React.ReactNode,
    cln?: string,
    type?: "button" | "submit" | "reset",
    onClick?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseLeave?: () => void;
}

export default function ButtonComponent({children,cln,type,onClick,onMouseDown,onMouseUp,onMouseLeave}:ButtonType){
    return(
        <button
        className={cln}
        type={type || "button"}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        >
            {children}
        </button>
    )
}