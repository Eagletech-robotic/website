import { Description, MemberPhoto, Overview, StyledMemberPresentation, Title } from './styles'

interface MemberPresentationProps {
    title: string
    photo: string
    description: string
}

export default function MemberPresentation(children: MemberPresentationProps) {
    return (
        <StyledMemberPresentation>
            <Overview>
                <MemberPhoto src={children.photo} />
                <Title>{children.title}</Title>
            </Overview>
            <Description>{children.description}</Description>
        </StyledMemberPresentation>
    )
}
