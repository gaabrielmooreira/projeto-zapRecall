export default function OpenFlashCard(props){
    return (
        <>
           { props.showThis && props.children
           }
        </>
    )
}