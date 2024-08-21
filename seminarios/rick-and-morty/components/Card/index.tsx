import { Card, StyledImage, StyledText } from "./styles";

interface CardCharacterProps{
    character: {
        name: string;
        image: string;
    }
}

export function CharacterCard({ character }:CardCharacterProps) {
    return (
        <Card>
            <StyledImage source={{ uri: character.image }}/>
            <StyledText>{character.name}</StyledText>
        </Card>
    )
}