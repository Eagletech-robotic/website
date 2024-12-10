import { useLayoutEffect, useRef, useState } from 'react'
import {
    Description,
    DescriptionWrapper,
    MemberPhoto,
    OpenIcon,
    Overview,
    StyledMemberPresentation,
    Title,
} from './styles'

interface MemberPresentationProps {
    title: string
    photo: string
    description: string
    isOpen: boolean
    onClick: () => void
}

export default function MemberPresentation({
    title,
    photo,
    description,
    isOpen,
    onClick,
}: MemberPresentationProps) {
    const descriptionRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    useLayoutEffect(() => {
        const element = descriptionRef.current!
        // For some reason, the element's height takes time to be correct.
        setTimeout(() => setHeight(element.offsetHeight), 100)
    }, [])

    return (
        <StyledMemberPresentation onClick={onClick} $isOpen={isOpen}>
            <Overview>
                <MemberPhoto src={photo} $isOpen={isOpen} />
                <Title>{title}</Title>
                <OpenIcon $isOpen={isOpen} />
            </Overview>
            <DescriptionWrapper $height={isOpen ? height : 0}>
                <Description ref={descriptionRef} $isOpen={isOpen}>
                    {description}
                </Description>
            </DescriptionWrapper>
        </StyledMemberPresentation>
    )
}
