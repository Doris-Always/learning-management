interface Props{
    color: string;
}
const User : React.FC<Props> = ({color}) =>{
    return(
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.685 17.7848V16.1125C17.685 15.2255 17.3326 14.3748 16.7054 13.7476C16.0782 13.1204 15.2275 12.7681 14.3405 12.7681H7.65159C6.76458 12.7681 5.9139 13.1204 5.2867 13.7476C4.65949 14.3748 4.30713 15.2255 4.30713 16.1125V17.7848" stroke={color} stroke-width="2.22809" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.9963 9.42378C12.8434 9.42378 14.3408 7.92641 14.3408 6.07932C14.3408 4.23223 12.8434 2.73486 10.9963 2.73486C9.14922 2.73486 7.65186 4.23223 7.65186 6.07932C7.65186 7.92641 9.14922 9.42378 10.9963 9.42378Z" stroke={color} stroke-width="2.22809" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    )
}

export default User;