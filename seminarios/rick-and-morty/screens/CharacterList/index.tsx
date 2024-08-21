import { useEffect, useState } from "react";
import { Container, Header } from "./styles";
import { ActivityIndicator, FlatList } from 'react-native';
import { Character, fetchCharacters } from "@/services/characterService";
import { CharacterCard } from "@/components/Card";

export function CharacterListScreen() {
    const [page, setPage] = useState<number>(1);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetchCharacters(page);
                setCharacters(prev => [...prev, ...response.results]);
                setHasMore(response.info.next !== null);
            } catch (error) {
                console.error('Error fetching characters:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page]);

    const loadMoreCharacters = () => {
        if (hasMore && !loading) {
            setPage(prev => prev + 1);
        }
    };

    const renderItem = ({ item }: { item: Character }) => <CharacterCard character={item} />;
    
    return (
        <Container>
            <Header>Rick and Morty Characters</Header>

            <FlatList
                data={characters}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                onEndReached={loadMoreCharacters}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            />
        </Container>
    )
}