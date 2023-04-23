import { Wrapper } from "./style"
import { AiOutlineLoading } from 'react-icons/ai'

export const Loader = () => {
    return (
        <Wrapper>
            <AiOutlineLoading className='loading-icon' size={40} />
        </Wrapper>
    )
}