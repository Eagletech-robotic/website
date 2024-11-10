import { Description, MemberPhoto, StyledMemberPresentation, Title } from './styles'

interface MemberPresentationProps {
    title: string
    photo: string
    description: string
}

export default function MemberPresentation(children: MemberPresentationProps) {
    return (
        <StyledMemberPresentation>
            <MemberPhoto src={children.photo} />
            <Title>{children.title}</Title>
        </StyledMemberPresentation>
    )
}
