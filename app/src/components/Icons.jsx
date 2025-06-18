import {
    LuCopy,
    LuArrowUpRight,
    LuArrowLeft,
    LuArrowRight,
    LuX
} from 'react-icons/lu';

const createIcon = (IconComponent) => () => (
    <IconComponent size='20' className='icon'/>
)

export const CopyIcon = createIcon(LuCopy);
export const ExternalLinkIcon= createIcon(LuArrowUpRight);
export const LeftArrowIcon= createIcon(LuArrowLeft);
export const RightArrowIcon= createIcon(LuArrowRight);
export const XIcon= createIcon(LuX);