import React, {useEffect, useState} from "react";
import {Button, ButtonGroup, Card, CardGroup} from "react-bootstrap";
import Loading from "../components/Loading";
import ServerConnect from "../utils/serverConnect";

const Posts = (props) => {
    const [heros, setHeros] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isReady, setReady] = useState(false)
    useEffect(() => {
        const getAllHero = async () => {
            try {
                const response = await props.heros;
                setHeros(response);
                setLoading(false)
                if (response.length === 0) {
                    setReady(true)
                }
                console.log(response)

            } catch (error) {
                console.log('Ошибка при получении данных:', error);
            }
        };

        getAllHero();

    },[]);

    useEffect(() => {
        if (!isLoading) {
            setLoading(true);
            setHeros([heros[heros.length - 1], ...heros.slice(0, heros.length - 1)]);
            setLoading(false);

        }
    }, [props.buttonLeft])


    useEffect(() => {
        if (!isLoading) {
            setLoading(true);
            setHeros([...heros.slice(1), heros[0]]);
            setLoading(false);

        }
    }, [props.buttonRight])



    function removeHero(id) {
        props.deleteHero.bind(ServerConnect)(id)
        window.location.reload();
    }

    return (
        <div style={{paddingTop: "65px"}}>
            {isLoading ? (
                <Loading/>
            ) : isReady ? (<h1 className={"d-flex justify-content-center m-5"}>Add post</h1>) : (
                <CardGroup>
                    {heros.slice(0, 5).map((hero, index) =>

                        <Card key={index} className={"m-1 border border-dark"}>
                            <Card.Img variant="top"
                                      src={hero?.imageURL}/>
                            <Card.Body>
                                <Card.Title>{hero?.nickName}</Card.Title>

                            </Card.Body>
                            <Card.Footer>
                                <ButtonGroup size="lg" className="mb-2 d-grid gap-2">
                                    <Button href={`/post/${hero?._id}`} variant="outline-info">Info</Button>
                                    <Button onClick={() => {
                                        removeHero(hero?._id)
                                    }} variant="outline-danger">Delete</Button>
                                </ButtonGroup>
                            </Card.Footer>
                        </Card>
                    )}
                </CardGroup>
            )}
        </div>
    );
}
export default Posts


