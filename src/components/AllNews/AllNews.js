import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import News from "../News/News";

const AllNews = () => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		const url =
			"https://newsapi.org/v2/top-headlines?country=us&apiKey=dc132a8c8d5d411f91f9daa1e1bfeb8b";

		fetch(url)
			.then((res) => res.json())
			.then((data) => setArticles(data.articles));
	}, []);

	return (
		<Container>
			<Row>
				{articles.map((article) => (
					<News article={article}></News>
				))}
			</Row>
		</Container>
	);
};

export default AllNews;
