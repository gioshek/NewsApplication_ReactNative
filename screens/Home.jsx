import { StyleSheet, Text, View, Alert, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';
import React from 'react';
import axios from 'axios';
import { Loading } from '../components/Loading';

export const HomeScreen = ({ navigation }) => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [items, setItems] = React.useState();

	const fetchPosts = () => {
		setIsLoading(true);
		axios.get('https://6442a47b76540ce22591df86.mockapi.io/api/news_app/posts').then(({ data }) => {
			setItems(data);
		}).catch(err => {
			console.log(err);
			Alert.alert("Ошибка", "Не удалось получить статьи");
		}).finally(() => {
			setIsLoading(false);
		})
	}

	React.useEffect(fetchPosts, []);

	if (isLoading) {
		return (
            <Loading />
        )
	}

	return (
		<View>
			
			<FlatList 
				refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
				data={items}
				renderItem={({item}) => (
					<TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
						<Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt} />
					</TouchableOpacity>
				)}

			/>
			
			{/* <StatusBar theme="auto" /> */}
		</View>
  	);
}


const styles = StyleSheet.create({

});
