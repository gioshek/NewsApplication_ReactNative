import React from "react";
import styled from "styled-components";
import { View } from 'react-native';
import axios from "axios";
import { Loading } from "../components/Loading";

const PostImage = styled.Image`
	width: 100%;
	height: 250px;
	border-radius: 10px;
	margin-bottom: 20px;
`;

const PostText = styled.Text`
	font-size: 18px;
	line-height: 24px;
`;


export const FullPostScreen = ({route, navigation}) => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState();
    const { id, title } = route.params;


    

    React.useEffect(() => {
        navigation.setOptions({
            title,
        });
        axios.get('https://6442a47b76540ce22591df86.mockapi.io/api/news_app/posts/' + id).then(({ data }) => {
			setData(data);
		}).catch(err => {
			console.log(err);
			Alert.alert("Ошибка", "Не удалось получить статью");
		}).finally(() => {
			setIsLoading(false);
		})
    }, []);

    if (isLoading) {
		return (
            <Loading />
        )
	}

    return (
        <View style={{ padding: 20 }} >
            <PostImage source={{uri: data.imageUrl}} />
            <PostText>
                {data.text}
            </PostText>
        </View>
    )
}