import React from "react";
import "./News.css";
import { Col, Card, Button } from "react-bootstrap";
import NewsDetails from "../NewsDetails/NewsDetails";

const News = (props) => {
	const { title, content, description, publishedAt, urlToImage, url } =
		props.article;
	return (
		<Col md={6}>
			<Card className="my-4">
				<Card.Img variant="top" src={urlToImage} className="w-100 card-img" />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{description}...</Card.Text>
				</Card.Body>
				<Card.Footer className="text-center">
					<Button variant="primary" onClick={()=> <NewsDetails article={props.article}></NewsDetails>}>
						Read More
					</Button>
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default News;
