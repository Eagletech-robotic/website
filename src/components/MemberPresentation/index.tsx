import {
    Description,
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

export default function MemberPresentation(children: MemberPresentationProps) {
    return (
        <StyledMemberPresentation onClick={children.onClick} $isOpen={children.isOpen}>
            <Overview $isOpen={children.isOpen}>
                <MemberPhoto src={children.photo} />
                <Title>{children.title}</Title>
                <OpenIcon $isOpen={children.isOpen} />
            </Overview>
            <Description $isOpen={children.isOpen}>{children.description}</Description>
        </StyledMemberPresentation>
    )
}
