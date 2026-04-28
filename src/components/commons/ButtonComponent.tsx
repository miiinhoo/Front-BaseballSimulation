
type ButtonType = {
    children: React.ReactNode,
    cln: string,
    type?: "button" | "submit" | "reset",
    onClick?: () => void;
}

export default function ButtonComponent({children,cln,type,onClick}:ButtonType){
    return(
        <button
        className={cln}
        type={type || "button"}
        onClick={onClick}
        >
            {children}
        </button>
    )
}